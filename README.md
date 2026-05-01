# Nervtek Bamenda — Community Meetup Registration Site

A fully static React website with Google Sheets data storage and automatic confirmation emails. No backend server required.

---

## 🏗️ Tech Stack

- **Frontend**: React + Vite
- **Hosting**: Vercel (free)
- **Database**: Google Sheets
- **Emails**: Google Apps Script (Gmail)

---

## ⚙️ Setup in 4 Steps

### Step 1 — Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new sheet
2. Rename **Sheet1** tab to `Registrations`
3. Leave it empty — the script will auto-create headers on first submission

---

### Step 2 — Google Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete all existing code
3. Paste the entire contents of `apps-script.js` (from this project root)
4. Click **Save** (💾)

**Deploy as Web App:**
1. Click **Deploy → New Deployment**
2. Click the ⚙️ gear icon → Select **Web App**
3. Configure:
   - **Description**: Nervtek Bamenda Registration
   - **Execute as**: Me (your Google account)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access** → Allow permissions
6. **Copy the Web App URL** — you'll need it next

> 💡 Test it works: Run the `testEmail()` function from the Apps Script editor. You should receive a test email.

---

### Step 3 — Connect Your React App

1. Open `src/components/RegistrationForm.jsx`
2. Find this line near the top:
   ```js
   const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `YOUR_APPS_SCRIPT_URL_HERE` with your actual Web App URL:
   ```js
   const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfy.../exec'
   ```

---

### Step 4 — Deploy to Vercel

```bash
# Install dependencies
npm install

# Test locally
npm run dev

# Build for production
npm run build
```

**Deploy on Vercel:**
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Leave all settings as default (Vercel auto-detects Vite)
5. Click **Deploy** → Your site is live! 🚀

---

## 📁 Project Structure

```
nervtek-bamenda/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing hero section
│   │   ├── Ticker.jsx        # Scrolling tech topics banner
│   │   ├── EventDetails.jsx  # Date, time, venue cards
│   │   ├── RegistrationForm.jsx  # Form + API call
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── apps-script.js    # Paste this into Google Apps Script
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🔄 How It Works

```
User submits form
      ↓
React POSTs JSON to Apps Script URL (no-cors mode)
      ↓
Apps Script saves row to Google Sheet
      ↓
Apps Script sends confirmation HTML email via Gmail
      ↓
React shows success screen
```

> **Note on `no-cors`**: Because Apps Script doesn't return CORS headers by default, the fetch uses `mode: 'no-cors'`. This means we can't read the response — but the request still goes through and the data is saved. The success screen appears optimistically after the request is sent.

---

## 🛠️ Customization

| What | Where |
|------|-------|
| Event name/date/time/venue | `apps-script.js` top constants + `EventDetails.jsx` + `RegistrationForm.jsx` |
| Colors & fonts | `src/index.css` CSS variables |
| Form fields | `RegistrationForm.jsx` + `apps-script.js` `sheet.appendRow()` |
| Email template | `sendConfirmationEmail()` in `apps-script.js` |

---

## ✅ Checklist Before Launch

- [ ] Google Sheet created with `Registrations` tab
- [ ] Apps Script pasted and deployed as Web App
- [ ] `testEmail()` function tested successfully
- [ ] `APPS_SCRIPT_URL` updated in `RegistrationForm.jsx`
- [ ] `npm run dev` tested locally — form submits and success screen shows
- [ ] Deployed to Vercel
- [ ] Submitted a test registration and verified: Sheet has the row + confirmation email received

---

Built for Nervtek Bamenda Chapter · May 2026 🚀
