import { useState } from 'react'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5edXbp4tMgVGEPnP_DIME6gZSo8ceGZ12O8UzGel4l0WPquG-sHIyBXNeF8_woBkcaA/exec'

function Field({ label, children }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      {children}
    </div>
  )
}

function Icon({ type, size = 18, style }) {
  const paths = {
    check: <path d="M7.4 13.1 3.9 9.6 2.5 11l4.9 4.9L17.8 5.5 16.4 4z" />,
    alert: <path d="M10 2 1.5 17h17L10 2Zm1 12H9v2h2v-2Zm0-6H9v5h2V8Z" />,
    loader: <path d="M10 2a8 8 0 1 0 8 8h-2a6 6 0 1 1-6-6V2Z" />,
  }

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 20 20" fill="currentColor" style={style}>
      {paths[type]}
    </svg>
  )
}

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    institution: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setErrorMsg('Please fill in all required fields.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      if (!APPS_SCRIPT_URL.includes('/exec')) {
        throw new Error('Paste your deployed Google Apps Script /exec URL in RegistrationForm.jsx.')
      }

      const payload = JSON.stringify({
        ...form,
        timestamp: new Date().toISOString(),
      })

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: payload,
      })
      setStatus('success')
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="register" className="success-state">
        <div className="success-card">
          <div className="success-icon">
            <Icon type="check" size={38} />
          </div>
          <h2>You're in</h2>
          <p>
            Thanks for registering, <strong>{form.name}</strong>. A confirmation
            email has been sent to <strong>{form.email}</strong>. We'll see you
            on May 30th at the University of Bamenda.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="registration">
      <div className="registration-copy">
        <span className="section-kicker">Register</span>
        <h2>Secure your spot today.</h2>
        <p>
          Free entry for students, developers, creators, and curious minds who
          want to meet, learn, and build with the Bamenda tech community.
        </p>

        <div className="registration-list">
          <div>
            <span>Date</span>
            <strong>May 30, 2026</strong>
          </div>
          <div>
            <span>Time</span>
            <strong>8:00 AM prompt</strong>
          </div>
          <div>
            <span>Venue</span>
            <strong>University of Bamenda</strong>
          </div>
          <div>
            <span>Entry</span>
            <strong>Free</strong>
          </div>
        </div>
      </div>

      <div className="registration-panel">
        <form className="form-stack" onSubmit={handleSubmit}>
          <Field label="Full Name *">
            <input
              className="form-input"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Tohkuh Serge"
            />
          </Field>

          <Field label="Email Address *">
            <input
              className="form-input"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </Field>

          <Field label="Phone Number *">
            <input
              className="form-input"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+237 6XX XXX XXX"
            />
          </Field>

          <Field label="Occupation / Field">
            <input
              className="form-input"
              name="occupation"
              value={form.occupation}
              onChange={handleChange}
              placeholder="e.g. Software Developer, Student"
            />
          </Field>

          <Field label="Institution / School">
            <input
              className="form-input"
              name="institution"
              value={form.institution}
              onChange={handleChange}
              placeholder="e.g. University of Bamenda"
            />
          </Field>

          {status === 'error' && (
            <div className="form-error">
              <Icon type="alert" size={17} />
              {errorMsg}
            </div>
          )}

          <button className="button button-dark" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <>
                <Icon type="loader" size={18} style={{ animation: 'spin 1s linear infinite' }} />
                Registering
              </>
            ) : (
              'Submit Registration'
            )}
          </button>

          <p className="form-note">A confirmation email will be sent to your inbox.</p>
        </form>
      </div>
    </section>
  )
}
