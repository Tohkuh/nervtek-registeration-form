import "./App.css";
import Hero from "./components/Hero";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <Hero />
      <section id="details" className="event-details">
        <div className="details-header">
          <span className="section-kicker">Event Details</span>
          <h2>Nervtek Bamenda Community Launch</h2>
          <div className="theme-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span>Theme: Creating a Tech Ecosystem for Innovation</span>
          </div>
        </div>

        <div className="details-body">
          <div className="details-text">
            <p>
              Join us for the Nervtek Bamenda Community Launch — a community
              gathering celebrating local innovation with keynote talks,
              workshops, and performances bringing together students, creators,
              and industry professionals.
            </p>
            <ul className="feature-list">
              <li>
                <span className="feature-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>3 keynote sessions on Education and Entrepreneurship</span>
              </li>
              <li>
                <span className="feature-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>1 panel discussion on Community Development</span>
              </li>
              <li>
                <span className="feature-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>2 workshops: Software (Secure App) &amp; Hardware (NtronKit)</span>
              </li>
              <li>
                <span className="feature-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <span>Performances &amp; games: participants vs professionals</span>
              </li>
            </ul>
          </div>

          <div className="details-grid">
            <article>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <span className="card-label">Date</span>
              <strong>30th May 2026</strong>
              <p>Starts 8:00 AM</p>
            </article>
            <article>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span className="card-label">Venue</span>
              <strong>University of Bamenda</strong>
              <p>School Canteen</p>
            </article>
            <article>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <span className="card-label">Keynotes</span>
              <strong>3 Sessions</strong>
              <p>Education &amp; Entrepreneurship</p>
            </article>
            <article>
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <span className="card-label">Workshops</span>
              <strong>2 Workshops</strong>
              <p>Software &amp; Hardware</p>
            </article>
          </div>
        </div>
      </section>
      <RegistrationForm />
    </>
  );
}

export default App;
