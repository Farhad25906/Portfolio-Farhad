require('dotenv').config({ path: '.env.local' })
const path = require('path')

// Since we're in a script, we'll directly test with google-auth-library
const { google } = require('googleapis')

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI

async function testAuth() {
  console.log('🧪 Testing Google authentication...\n')
  
  // Check environment variables
  console.log('Checking environment variables:')
  console.log(`✅ GOOGLE_CLIENT_ID: ${GOOGLE_CLIENT_ID ? 'Set' : 'Missing'}`)
  console.log(`✅ GOOGLE_CLIENT_SECRET: ${GOOGLE_CLIENT_SECRET ? 'Set' : 'Missing'}`)
  console.log(`✅ GOOGLE_REFRESH_TOKEN: ${GOOGLE_REFRESH_TOKEN ? 'Set' : 'Missing'}`)
  console.log(`✅ GOOGLE_REDIRECT_URI: ${GOOGLE_REDIRECT_URI ? GOOGLE_REDIRECT_URI : 'Using default'}\n`)
  
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    console.error('❌ Missing required environment variables!')
    console.log('\nPlease add these to your .env.local file:')
    console.log(`
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REFRESH_TOKEN=your_refresh_token_here
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
    `)
    return
  }

  try {
    // Create OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GOOGLE_REDIRECT_URI
    )
    
    // Set credentials with refresh token
    oauth2Client.setCredentials({
      refresh_token: GOOGLE_REFRESH_TOKEN
    })
    
    console.log('🔐 Getting access token...')
    
    // Try to get an access token
    const { token } = await oauth2Client.getAccessToken()
    
    if (token) {
      console.log('✅ Success! Access token obtained.')
      console.log('✅ Authentication is working correctly!\n')
      
      // Test Calendar API access
      console.log('📅 Testing Calendar API access...')
      const calendar = google.calendar({ version: 'v3', auth: oauth2Client })
      
      try {
        // Try to list calendars (minimal API call)
        const response = await calendar.calendarList.list()
        console.log(`✅ Calendar API accessible! Found ${response.data.items?.length || 0} calendars`)
        
        // Check primary calendar access
        const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'
        console.log(`📆 Using calendar ID: ${calendarId}`)
        
        return {
          success: true,
          message: 'All tests passed!'
        }
        
      } catch (calendarError) {
        console.error('❌ Calendar API error:', calendarError.message)
        return {
          success: false,
          message: 'Calendar API access failed'
        }
      }
    } else {
      console.error('❌ Failed to get access token')
      return {
        success: false,
        message: 'Failed to get access token'
      }
    }
    
  } catch (error) {
    console.error('❌ Authentication failed:', error.message)
    console.log('\n🔧 Troubleshooting steps:')
    console.log('1. Make sure your Google OAuth credentials are correct')
    console.log('2. The refresh token might be expired or revoked')
    console.log('3. Run: node scripts/get-refresh-token.js to get a new refresh token')
    console.log('4. Make sure Google Calendar API is enabled in Google Cloud Console')
    
    return {
      success: false,
      message: error.message
    }
  }
}

// Run the test
testAuth().then(result => {
  if (result) {
    console.log('\n' + (result.success ? '🎉 All tests passed!' : '❌ Tests failed'))
    process.exit(result.success ? 0 : 1)
  }
})