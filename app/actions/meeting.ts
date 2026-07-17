'use server'

import { google } from 'googleapis'
import { getAuthClient } from '@/lib/google-auth'

const TIME_ZONE = 'Asia/Dhaka'
const TIME_ZONE_OFFSET = '+06:00'
const MEETING_DURATION_MINUTES = 60
const SLOT_STEP_MINUTES = 30
const WORK_DAY_START_HOUR = 9
const WORK_DAY_END_HOUR = 18
const DEFAULT_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'farhadhossen2590@gmail.com'

interface MeetingSlot {
  value: string
  label: string
}

function buildDhakaDateTime(date: string, time: string) {
  return new Date(`${date}T${time.length === 5 ? `${time}:00` : time}${TIME_ZONE_OFFSET}`)
}

function getDhakaDayBounds(date: string) {
  return {
    start: new Date(`${date}T00:00:00${TIME_ZONE_OFFSET}`),
    end: new Date(`${date}T23:59:59${TIME_ZONE_OFFSET}`),
  }
}

function getCalendarId() {
  return DEFAULT_CALENDAR_ID
}

function formatSlotLabel(slot: Date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: TIME_ZONE,
  }).format(slot)
}

async function getBusyIntervals(date: string) {
  const authClient = await getAuthClient()
  const calendar = google.calendar({
    version: 'v3',
    auth: authClient,
  })

  const { start, end } = getDhakaDayBounds(date)
  const calendarId = getCalendarId()
  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: start.toISOString(),
      timeMax: end.toISOString(),
      items: [{ id: calendarId }],
    },
  })

  const busy = response.data.calendars?.[calendarId]?.busy ?? []
  return busy.map((interval) => ({
    start: new Date(interval.start ?? start.toISOString()),
    end: new Date(interval.end ?? end.toISOString()),
  }))
}

function generateSlots(date: string, busyIntervals: Array<{ start: Date; end: Date }>): MeetingSlot[] {
  const slots: MeetingSlot[] = []
  const now = new Date()

  for (let hour = WORK_DAY_START_HOUR; hour < WORK_DAY_END_HOUR; hour += 1) {
    for (const minute of [0, SLOT_STEP_MINUTES]) {
      if (hour === WORK_DAY_END_HOUR - 1 && minute > 0) {
        continue
      }

      const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
      const slotStart = buildDhakaDateTime(date, time)
      const slotEnd = new Date(slotStart.getTime() + MEETING_DURATION_MINUTES * 60 * 1000)

      if (slotStart <= now) {
        continue
      }

      const overlaps = busyIntervals.some((interval) => slotStart < interval.end && slotEnd > interval.start)
      if (!overlaps) {
        slots.push({
          value: time,
          label: formatSlotLabel(slotStart),
        })
      }
    }
  }

  return slots
}

export async function getAvailableMeetingSlots(date: string): Promise<{
  success: boolean
  message: string
  slots: MeetingSlot[]
}> {
  try {
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return {
        success: false,
        message: 'Please choose a valid date.',
        slots: [],
      }
    }

    const busyIntervals = await getBusyIntervals(date)
    const slots = generateSlots(date, busyIntervals)

    if (!slots.length) {
      return {
        success: false,
        message: 'No free one-hour slots are open for that day. Please choose another date.',
        slots: [],
      }
    }

    return {
      success: true,
      message: 'Available times loaded successfully.',
      slots,
    }
  } catch (error: unknown) {
    console.error('Error checking meeting availability:', error)
    return {
      success: true,
      message: 'Could not verify your calendar right now, so I am showing the default working hours instead.',
      slots: generateSlots(date, []),
    }
  }
}

export async function createMeeting(
  _prevState: unknown,
  formData: FormData
): Promise<{
  success: boolean
  message: string
  link?: string
  meetingId?: string
}> {
  try {
    const email = formData.get('email') as string
    const date = formData.get('date') as string
    const time = formData.get('time') as string

    if (!email || !date || !time) {
      return {
        success: false,
        message: 'Please fill in all required fields'
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      }
    }

    const meetingDateTime = buildDhakaDateTime(date, time)
    const endDateTime = new Date(meetingDateTime.getTime() + MEETING_DURATION_MINUTES * 60 * 1000)

    if (meetingDateTime < new Date()) {
      return {
        success: false,
        message: 'Please select a future date and time'
      }
    }

    const availability = await getAvailableMeetingSlots(date)
    if (!availability.success) {
      return {
        success: false,
        message: availability.message,
      }
    }

    const selectedTimeAvailable = availability.slots.some((slot) => slot.value === time)
    if (!selectedTimeAvailable) {
      return {
        success: false,
        message: 'That time is no longer free. Please choose another available slot.',
      }
    }

    const authClient = await getAuthClient()

    const calendar = google.calendar({
      version: 'v3',
      auth: authClient
    })

    const event = {
      summary: `Meeting with ${email.split('@')[0]}`,
      description: `Meeting scheduled via website form\n\nAttendee: ${email}`,
      start: {
        dateTime: meetingDateTime.toISOString(),
        timeZone: TIME_ZONE,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: TIME_ZONE,
      },
      attendees: [
        { email },
        { email: ADMIN_EMAIL }
      ],
      conferenceData: {
        createRequest: {
          requestId: `meeting-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
          conferenceSolutionKey: {
            type: 'hangoutsMeet'
          }
        }
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 10 } // 10 minutes before
        ]
      }
    }

    const response = await calendar.events.insert({
      calendarId: getCalendarId(),
      requestBody: event,
      conferenceDataVersion: 1,
      sendUpdates: 'all',
    })

    const meetingLink = response.data.hangoutLink
    const meetingId = response.data.id
    const fallbackLink = response.data.conferenceData?.entryPoints?.find(
      (entry) => entry.entryPointType === 'video'
    )?.uri

    const finalMeetingLink = meetingLink || fallbackLink

    if (!finalMeetingLink) {
      return {
        success: false,
        message: 'Failed to create Google Meet link. Please ensure Google Meet is enabled for your calendar.'
      }
    }

    return {
      success: true,
      message: `Meeting created successfully! Google Calendar has sent the invite to ${email} and ${ADMIN_EMAIL}.`,
      link: finalMeetingLink,
      meetingId: meetingId || undefined
    }

  } catch (error: unknown) {
    console.error('Error creating meeting:', error)

    const code =
      typeof error === 'object' && error !== null && 'code' in error
        ? (error as { code?: number }).code
        : undefined
    const message = error instanceof Error ? error.message : 'Failed to create meeting. Please try again.'

    if (code === 401) {
      return {
        success: false,
        message: 'Authentication failed. Please check Google API credentials. Make sure GOOGLE_REFRESH_TOKEN is set correctly.'
      }
    }
    
    if (code === 403) {
      return {
        success: false,
        message: 'Permission denied. Make sure the calendar API is enabled and the service account has proper permissions.'
      }
    }

    return {
      success: false,
      message
    }
  }
}
