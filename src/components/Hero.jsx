export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid" />

      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="Nervtek Bamenda home">
          <span className="brand-mark">N</span>
          <span>Nervtek Bamenda</span>
        </a>

        <div className="nav-links">
          <a href="#details">Event</a>
          <a href="#register">Register</a>
        </div>
      </nav>

      <div className="hero-content" id="top">
        <span className="eyebrow">First Meetup | Human factor in tech</span>
        <h1>The future of Bamenda tech.</h1>
        <p>
          Join young builders, creators, and technology enthusiasts for a focused
          community meetup inspired by practical innovation, safety, and smarter
          digital systems.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#register">Register Now</a>
          <a className="button button-secondary" href="#details">Learn More</a>
        </div>
      </div>
    </header>
  )
}
