const { google } = require('googleapis')
const readline = require('readline')
const path = require('path')
const fs = require('fs')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/google'

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error('❌ Error: GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET must be set in .env.local')
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

console.log('\n' + '='.repeat(80))
console.log('📝 GOOGLE CALENDAR API - REFRESH TOKEN GENERATOR')
console.log('='.repeat(80) + '\n')

console.log('STEP 1: Authorize the application')
console.log('-'.repeat(80))
console.log('\n🔗 Authorization URL:\n')
console.log(url)
console.log('\n')

// Also save to a file for easy access
const urlFile = path.join(__dirname, 'auth-url.txt')
fs.writeFileSync(urlFile, url)
console.log(`✅ URL also saved to: ${urlFile}`)
console.log('\n' + '-'.repeat(80) + '\n')

console.log('STEP 2: Get the authorization code')
console.log('-'.repeat(80))
console.log('1. Copy the URL above and open it in your browser')
console.log('2. Sign in with your Google account (farhadhossen2590@gmail.com)')
console.log('3. Grant calendar permissions')
console.log('4. You will be redirected to a URL that looks like:')
console.log('   https://portfolio-farhad.vercel.app/auth/callback/google?code=XXXXX')
console.log('5. Copy the entire code value (everything after "code=")')
console.log('\n' + '-'.repeat(80) + '\n')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('📋 Paste the authorization code here: ', (code) => {
  if (!code || code.trim() === '') {
    console.error('\n❌ Error: No code provided')
    rl.close()
    process.exit(1)
  }

  console.log('\n⏳ Exchanging code for tokens...\n')
  
  oauth2Client.getToken(code.trim(), (err, tokens) => {
    if (err) {
      console.error('\n❌ Error getting tokens:', err.message)
      console.log('\n💡 Troubleshooting:')
      console.log('   - Make sure you copied the entire code')
      console.log('   - The code might have expired (they expire quickly)')
      console.log('   - Try running the script again and use the code immediately')
      rl.close()
      return
    }
    
    console.log('='.repeat(80))
    console.log('✅ SUCCESS! Tokens obtained')
    console.log('='.repeat(80) + '\n')
    
    console.log('📝 Add this line to your .env.local file:\n')
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`)
    console.log('\n' + '='.repeat(80))
    console.log('\n💡 Next steps:')
    console.log('   1. Copy the line above')
    console.log('   2. Add it to your .env.local file')
    console.log('   3. Restart your dev server (npm run dev)')
    console.log('   4. Test with: node scripts/test-auth.js')
    console.log('\n' + '='.repeat(80) + '\n')
    
    rl.close()
  })
})