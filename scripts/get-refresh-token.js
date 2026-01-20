const { google } = require('googleapis')
const readline = require('readline')
const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/google'

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error('Error: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set in .env.local')
  process.exit(1)
}

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
)

// Generate the URL
const scopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/calendar.events'
]

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  prompt: 'consent' // Force to get refresh token every time
})

console.log('\n1. Visit this URL to authorize the application:\n', url)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('\n2. Enter the code from the redirected URL: ', (code) => {
  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.error('\nError getting tokens:', err.message)
      rl.close()
      return
    }
    
    console.log('\nSuccess! Add this to your .env.local file:\n')
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`)
    console.log('\n(Note: You only need the refresh token. The access token is handled automatically.)')
    
    rl.close()
  })
})