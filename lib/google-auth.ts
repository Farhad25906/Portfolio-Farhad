import { OAuth2Client } from 'google-auth-library'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN

export async function getAuthClient(): Promise<OAuth2Client> {
  // Validate environment variables
  const missingVars = []
  if (!GOOGLE_CLIENT_ID) missingVars.push('GOOGLE_CLIENT_ID')
  if (!GOOGLE_CLIENT_SECRET) missingVars.push('GOOGLE_CLIENT_SECRET')
  if (!GOOGLE_REFRESH_TOKEN) missingVars.push('GOOGLE_REFRESH_TOKEN')
  
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}\n` +
      'Please add them to your .env.local file.\n' +
      'Run: node scripts/get-refresh-token.js to generate GOOGLE_REFRESH_TOKEN'
    )
  }

  const oauth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/google'
  )

  // Set credentials with refresh token
  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN
  })

  try {
    // Get access token (this will automatically refresh if needed)
    const { token } = await oauth2Client.getAccessToken()
    
    if (!token) {
      throw new Error(
        'Failed to obtain access token. Your refresh token may be invalid or expired.\n' +
        'Run: node scripts/get-refresh-token.js to generate a new GOOGLE_REFRESH_TOKEN'
      )
    }
    
    console.log('✅ Successfully authenticated with Google Calendar API')
  } catch (error: any) {
    console.error('❌ Google authentication error:', error.message)
    throw new Error(
      `Google Calendar authentication failed: ${error.message}\n` +
      'Please verify your credentials and refresh token are correct.\n' +
      'Run: node scripts/get-refresh-token.js to generate a new GOOGLE_REFRESH_TOKEN'
    )
  }
  
  return oauth2Client
}