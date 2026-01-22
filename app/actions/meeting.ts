'use server'

import { google } from 'googleapis'
import { format } from 'date-fns'
import { getAuthClient } from '@/lib/google-auth'

interface MeetingFormData {
  email: string
  date: string
  time: string
}

export async function createMeeting(
  prevState: any,
  formData: FormData
): Promise<{
  success: boolean
  message: string
  link?: string
  meetingId?: string
}> {
  try {
    // Extract form data
    const email = formData.get('email') as string
    const date = formData.get('date') as string
    const time = formData.get('time') as string

    console.log('Form data received:', { email, date, time })

    // Validate inputs
    if (!email || !date || !time) {
      return {
        success: false,
        message: 'Please fill in all required fields'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      }
    }

    // Parse date and time
    const meetingDateTime = new Date(`${date}T${time}`)
    const endDateTime = new Date(meetingDateTime)
    endDateTime.setHours(endDateTime.getHours() + 1) // 1 hour meeting

    // Check if date is in the future
    if (meetingDateTime < new Date()) {
      return {
        success: false,
        message: 'Please select a future date and time'
      }
    }

    // Get authenticated client
    const authClient = await getAuthClient()
    
    // Create Google Calendar instance
    const calendar = google.calendar({ 
      version: 'v3', 
      auth: authClient 
    })

    const event = {
      summary: 'Meeting with ' + email.split('@')[0],
      description: `Meeting scheduled via website form\n\nAttendee: ${email}`,
      start: {
        dateTime: meetingDateTime.toISOString(),
        timeZone: 'Asia/Dhaka', // Updated to your timezone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Asia/Dhaka', // Updated to your timezone
      },
      attendees: [
        { email },
        { email: process.env.ADMIN_EMAIL || 'farhadhossen2590@gmail.com' }
      ],
      conferenceData: {
        createRequest: {
          requestId: `meeting-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
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

    console.log('Creating calendar event...')

    // Insert event
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
    })

    console.log('Event created:', response.data.id)

    const meetingLink = response.data.hangoutLink
    const meetingId = response.data.id

    if (!meetingLink) {
      return {
        success: false,
        message: 'Failed to create Google Meet link. Please ensure Google Meet is enabled for your calendar.'
      }
    }

    // Send confirmation email (simplified version)
    await sendConfirmationEmail(email, meetingDateTime, meetingLink)

    return {
      success: true,
      message: 'Meeting created successfully! Check your email for details.',
      link: meetingLink,
      meetingId: meetingId || undefined
    }

  } catch (error: any) {
    console.error('Error creating meeting:', error)
    
    // Handle specific Google API errors
    if (error.code === 401) {
      return {
        success: false,
        message: 'Authentication failed. Please check Google API credentials. Make sure GOOGLE_REFRESH_TOKEN is set correctly.'
      }
    }
    
    if (error.code === 403) {
      return {
        success: false,
        message: 'Permission denied. Make sure the calendar API is enabled and the service account has proper permissions.'
      }
    }

    return {
      success: false,
      message: error.message || 'Failed to create meeting. Please try again.'
    }
  }
}

// Simplified email function
async function sendConfirmationEmail(
  attendeeEmail: string,
  meetingTime: Date,
  meetingLink: string
) {
  try {
    console.log(`📧 Sending email to: ${attendeeEmail}`)
    console.log(`📅 Meeting time: ${format(meetingTime, 'PPP p')}`)
    console.log(`🔗 Meeting link: ${meetingLink}`)
    
    // Here you can integrate with an email service like Resend, SendGrid, etc.
    // For now, we'll just log it
  } catch (emailError) {
    console.error('Failed to send confirmation email:', emailError)
  }
}