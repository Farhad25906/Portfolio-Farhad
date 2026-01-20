'use server'

export async function createMeeting(prevState: any, formData: FormData) {
  const email = formData.get('email')
  const date = formData.get('date')
  const time = formData.get('time')
  
  // Generate a random meeting ID
  const meetingId = Math.random().toString(36).substring(7)
  const meetingLink = `https://meet.jit.si/PortfolioMeeting-${meetingId}`

  console.log('--- Email Mock Transport ---')
  console.log(`To: ${email}`)
  console.log(`CC: MyEmail@example.com`) // Logic to include user's email
  console.log(`Subject: Meeting Invitation: ${date} at ${time}`)
  console.log(`Body: Please join via this link: ${meetingLink}`)
  console.log('----------------------------')

  return {
    success: true,
    message: 'Meeting invitation sent successfully!',
    link: meetingLink
  }
}
