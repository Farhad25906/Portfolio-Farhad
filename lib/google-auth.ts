import { OAuth2Client } from 'google-auth-library'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN

const oauth2Client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI
)

export async function getAuthClient() {
  if (!GOOGLE_REFRESH_TOKEN) {
    throw new Error(
      'GOOGLE_REFRESH_TOKEN is missing from environment variables. ' +
      'Please run "node scripts/get-refresh-token.js" to generate it and add it to your .env.local file.'
    )
  }

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    throw new Error('GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is missing from environment variables.')
  }

  // Set credentials
  oauth2Client.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN
  })
  
  // The client will automatically refresh the access token when needed 
  // if a refresh_token is provided in the credentials.
  
  return oauth2Client
}