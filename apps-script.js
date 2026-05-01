const SHEET_NAME = 'Registrations'
// Optional: paste your Google Sheet ID here if this script is not opened from
// Extensions > Apps Script inside the target spreadsheet.
const SPREADSHEET_ID = ''
const EVENT_NAME = 'Nervtek Bamenda Meetup'
const EVENT_DATE = 'May 30, 2026'
const EVENT_TIME = '8:00 AM'
const EVENT_VENUE = 'University of Bamenda'

function doGet() {
  const sheet = getRegistrationSheet()

  return jsonResponse({
    ok: true,
    message: 'Nervtek registration endpoint is running.',
    spreadsheetName: sheet.getParent().getName(),
    sheetName: sheet.getName(),
    lastRow: sheet.getLastRow(),
  })
}

function doPost(e) {
  try {
    const data = parseRequest(e)
    validateRegistration(data)

    const sheet = getRegistrationSheet()
    ensureHeaders(sheet)

    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.occupation || '',
      data.institution || '',
    ])

    sendConfirmationEmail(data)

    return jsonResponse({
      ok: true,
      message: 'Registration saved.',
    })
  } catch (error) {
    console.error(error)

    return jsonResponse({
      ok: false,
      message: error.message || 'Registration failed.',
    })
  }
}

function parseRequest(e) {
  if (!e) return {}

  if (e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter
  }

  const body = e.postData && e.postData.contents
  if (!body) return {}

  try {
    return JSON.parse(body)
  } catch (error) {
    return {}
  }
}

function validateRegistration(data) {
  if (!data.name || !data.email || !data.phone) {
    throw new Error('Name, email, and phone are required.')
  }
}

function getRegistrationSheet() {
  const spreadsheet = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet()

  if (!spreadsheet) {
    throw new Error('No spreadsheet found. Open Apps Script from your Google Sheet, or set SPREADSHEET_ID in apps-script.js.')
  }

  let sheet = spreadsheet.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME)
  }

  return sheet
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() > 0) return

  sheet.appendRow([
    'Timestamp',
    'Full Name',
    'Email',
    'Phone',
    'Occupation / Field',
    'Institution / School',
  ])
}

function sendConfirmationEmail(data) {
  const subject = `Registration confirmed: ${EVENT_NAME}`
  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#071b2f;line-height:1.6">
      <h2 style="color:#006f9f;margin-bottom:8px">You're registered.</h2>
      <p>Hello ${escapeHtml(data.name)},</p>
      <p>Thanks for registering for <strong>${EVENT_NAME}</strong>.</p>
      <div style="background:#eaf6fc;border-left:4px solid #00aeef;padding:14px 16px;margin:20px 0">
        <p style="margin:0"><strong>Date:</strong> ${EVENT_DATE}</p>
        <p style="margin:0"><strong>Time:</strong> ${EVENT_TIME}</p>
        <p style="margin:0"><strong>Venue:</strong> ${EVENT_VENUE}</p>
      </div>
      <p>We look forward to seeing you there.</p>
      <p style="color:#47687d">Nervtek Bamenda Team</p>
    </div>
  `

  GmailApp.sendEmail(data.email, subject, `You're registered for ${EVENT_NAME}.`, {
    htmlBody,
    name: 'Nervtek Bamenda',
  })
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function testEmail() {
  sendConfirmationEmail({
    name: 'Test User',
    email: Session.getActiveUser().getEmail(),
    phone: '+237 600 000 000',
    occupation: 'Tester',
    institution: 'Nervtek',
  })
}
