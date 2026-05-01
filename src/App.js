import "./App.css";
import Hero from "./components/Hero";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <section id="details" className="event-details">
        <div className="details-shape details-shape--1" aria-hidden="true" />
        <div className="details-shape details-shape--2" aria-hidden="true" />

        <div className="details-header">
          <span className="section-kicker">Nervtek Bamenda Community Launch</span>
          <h2>Creating a Tech Ecosystem for Innovation</h2>
          <p className="details-intro">
            A landmark community gathering celebrating local innovation,
            bringing together students, creators, and industry professionals to
            build the future of Bamenda.
          </p>
        </div>

        {/* Logistics Ribbon */}
        <div className="details-logistics">
          <article className="card--date">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <div>
              <span className="card-label">Date</span>
              <strong>30th May 2026</strong>
              <p>Starts 8:00 AM prompt</p>
            </div>
          </article>
          <article className="card--venue">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <span className="card-label">Venue</span>
              <strong>University of Bamenda</strong>
              <p>School Canteen</p>
            </div>
          </article>
          <article className="card--keynotes">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <div>
              <span className="card-label">Keynotes</span>
              <strong>3 Masterclasses</strong>
              <p>Edu &amp; Entrepreneurship</p>
            </div>
          </article>
          <article className="card--workshops">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <div>
              <span className="card-label">Workshops</span>
              <strong>2 Deep Dives</strong>
              <p>Software &amp; Hardware</p>
            </div>
          </article>
        </div>

        {/* Value Features Grid */}
        <div className="details-features">
          <div className="feature-card">
            <div className="feature-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
            <h4>Learn from Experts</h4>
            <p>3 keynote sessions focusing on the intersection of modern Education and Entrepreneurship.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
            <h4>Shape the Future</h4>
            <p>1 interactive panel discussion on strategic Community Development and innovation.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
            <h4>Hands-on Sprints</h4>
            <p>Master new skills in our 2 workshops covering Secure Software &amp; NtronKit Hardware.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>
            <h4>Community Spirit</h4>
            <p>Networking games and live performances featuring participants vs industry professionals.</p>
          </div>
        </div>
      </section>
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default App;
