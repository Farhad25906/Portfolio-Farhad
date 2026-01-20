'use server'

import { google } from 'googleapis'
import { format } from 'date-fns'
import { getAuthClient } from '@/lib/google-auth'

interface MeetingFormData {
  email: string
  date: string
  time: string
}

export async function createMeeting(p0: null, formData: FormData): Promise<{
  success: boolean
  message: string
  link?: string
  meetingId?: string
}> {
  try {
    console.log(formData);
    
    // Extract form data
    const email = formData.get('email') as string
    const date = formData.get('date') as string
    const time = formData.get('time') as string

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

    // Create Google Calendar event with Google Meet
    const calendar = google.calendar({ version: 'v3', auth: await getAuthClient() })

    const event = {
      summary: 'Meeting with ' + email,
      description: `Meeting scheduled via website form`,
      start: {
        dateTime: meetingDateTime.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'UTC',
      },
      attendees: [
        { email },
        { email: process.env.ADMIN_EMAIL || 'your_email@gmail.com' }
      ],
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          conferenceSolutionKey: {
            type: 'hangoutsMeet'
          }
        }
      },
      reminders: {
        useDefault: true,
      }
    }

    // Insert event
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'farhadhossen2590@gmail.com',
      requestBody: event,
      conferenceDataVersion: 1,
    })
    console.log(response);
    

    const meetingLink = response.data.hangoutLink
    const meetingId = response.data.id

    if (!meetingLink) {
      return {
        success: false,
        message: 'Failed to create Google Meet link'
      }
    }

    // Send confirmation email (optional - using a simple email service)
    await sendConfirmationEmail(email, meetingDateTime, meetingLink)

    return {
      success: true,
      message: 'Meeting created successfully!',
      link: meetingLink,
      meetingId: meetingId ?? undefined
    }

  } catch (error: any) {
    console.error('Error creating meeting:', error)
    
    // Handle specific Google API errors
    if (error.code === 401) {
      return {
        success: false,
        message: 'Authentication failed. Please check Google API credentials.'
      }
    }
    
    if (error.code === 403) {
      return {
        success: false,
        message: 'Permission denied. Make sure the calendar API is enabled.'
      }
    }

    return {
      success: false,
      message: error.message || 'Failed to create meeting. Please try again.'
    }
  }
}

// Optional: Send confirmation email
async function sendConfirmationEmail(
  attendeeEmail: string,
  meetingTime: Date,
  meetingLink: string
) {
  // You can use nodemailer, Resend, or any email service
  // This is a placeholder - implement based on your email service
  
  console.log(`Would send email to ${attendeeEmail}`)
  console.log(`Meeting time: ${meetingTime}`)
  console.log(`Meeting link: ${meetingLink}`)
  
  // Example with Resend (install: npm install resend)
  /*
  import { Resend } from 'resend'
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'meetings@yourdomain.com',
    to: attendeeEmail,
    subject: 'Your Meeting Invitation',
    html: `
      <h1>Meeting Scheduled</h1>
      <p>Your meeting is scheduled for ${format(meetingTime, 'PPP p')}</p>
      <p>Join via Google Meet: <a href="${meetingLink}">${meetingLink}</a></p>
    `
  })
  */
}