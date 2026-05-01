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
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <h2>You're in!</h2>
          <p>
            Thanks for registering, <strong>{form.name}</strong>. A confirmation
            email has been sent to <strong>{form.email}</strong>. We'll see you
            on May 30th at the University of Bamenda.
          </p>
          <a className="button button-primary" href="#top" style={{ marginTop: '24px' }}>
            Back to Top
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="registration">
      {/* Background decorations */}
      <div className="registration-grid" aria-hidden="true" />
      <div className="registration-shape registration-shape--1" aria-hidden="true" />

      <div className="registration-inner">
        <div className="registration-copy">
          <span className="section-kicker">Register</span>
          <h2>Secure your spot today.</h2>
          <p>
            Free entry for students, developers, creators, and curious minds who
            want to meet, learn, and build with the Bamenda tech community.
          </p>

          <div className="registration-info-cards">
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <div>
                <span className="info-card-label">Date</span>
                <strong>May 30, 2026</strong>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <span className="info-card-label">Time</span>
                <strong>8:00 AM prompt</strong>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span className="info-card-label">Venue</span>
                <strong>University of Bamenda</strong>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
              <div>
                <span className="info-card-label">Entry</span>
                <strong>Free</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="registration-panel">
          <div className="panel-header">
            <h3 className="panel-title">Register Now</h3>
            <p className="panel-subtitle">Fill in your details below</p>
          </div>
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

            <button className="button button-submit" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <Icon type="loader" size={18} style={{ animation: 'spin 1s linear infinite' }} />
                  Registering...
                </>
              ) : (
                <>
                  Submit Registration
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </>
              )}
            </button>

            <p className="form-note">A confirmation email will be sent to your inbox.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
