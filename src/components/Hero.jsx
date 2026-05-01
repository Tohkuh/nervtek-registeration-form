export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid" />

      {/* Floating accent shapes for visual depth */}
      <div className="hero-shape hero-shape--1" aria-hidden="true" />
      <div className="hero-shape hero-shape--2" aria-hidden="true" />
      <div className="hero-shape hero-shape--3" aria-hidden="true" />
      <div className="hero-shape hero-shape--4" aria-hidden="true" />
      <div className="hero-shape hero-shape--5" aria-hidden="true" />

      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-container">
          <a
            className="brand-lockup"
            href="#top"
            aria-label="Nervtek Bamenda home"
          >
            <img src="/logo_white.png" alt="Nervtek" className="brand-logo" />
            <span className="brand-text">Nervtek Bamenda</span>
          </a>

          <div className="nav-links">
            <a href="#details">Event</a>
            <a href="#register">Register</a>
          </div>
        </div>
      </nav>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="eyebrow" aria-label="Event status">
            <span className="eyebrow-dot" />
            FIRST MEETUP · BAMENDA
          </div>
          <span className="section-kicker">Nervtek Bamenda Community Launch</span>
          <h1>
            CREATING A TECH ECOSYSTEM <br />
            <span className="text-gradient">FOR INNOVATION</span>
          </h1>
          <p>
            Join young builders, creators, and technology enthusiasts for a
            focused community meetup inspired by practical innovation,
            safety, and smarter digital systems.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#register">
              Register Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a className="button button-secondary" href="#details">
              Learn More
            </a>
          </div>

          {/* Social proof / stats bar */}
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>200+</strong>
              <span>Expected Attendees</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <strong>6+</strong>
              <span>Sessions & Workshops</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <strong>Free</strong>
              <span>Admission</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src="/Nervtek_Home-1024x1024.png"
              alt="Young innovator using VR headset at Nervtek Holiday Tech Camp — Inspire, Create, Innovate"
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
