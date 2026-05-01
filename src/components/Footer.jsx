export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-lockup">
            <img src="/logo_white.png" alt="Nervtek" className="brand-logo" />
            <span className="brand-text">Nervtek Bamenda</span>
          </div>
          <p className="footer-tagline">
            Building the next generation of tech innovators in the heart of Bamenda.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Contacts</h4>
            <ul className="footer-list">
              <li><a href="tel:+237690709635">+237 690 709 635</a></li>
              <li><a href="tel:+237682891051">+237 682 891 051</a></li>
              <li><a href="tel:+237682833601">+237 682 833 601</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Links</h4>
            <ul className="footer-list">
              <li><a href="https://nervtek.cc" target="_blank" rel="noopener noreferrer">Official Website</a></li>
              <li><a href="#details">Event Details</a></li>
              <li><a href="#register">Register Now</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Community</h4>
            <p className="footer-info">
              Nervtek Community Bamenda <br />
              University of Bamenda
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nervtek. All rights reserved.</p>
          <div className="footer-social">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
