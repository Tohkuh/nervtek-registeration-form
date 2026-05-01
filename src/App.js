import './App.css';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <>
      <Hero />
      <section id="details" className="event-details">
        <div>
          <span className="section-kicker">Event Details</span>
          <h2>Meet builders from Bamenda.</h2>
          <p>
            A practical community meetup for students, developers, creators,
            and tech-curious people who want to learn, connect, and build what
            comes next.
          </p>
        </div>

        <div className="details-grid">
          <article>
            <span>Date</span>
            <strong>May 30, 2026</strong>
          </article>
          <article>
            <span>Time</span>
            <strong>8:00 AM</strong>
          </article>
          <article>
            <span>Venue</span>
            <strong>University of Bamenda</strong>
          </article>
          <article>
            <span>Entry</span>
            <strong>Free</strong>
          </article>
        </div>
      </section>
      <RegistrationForm />
    </>
  );
}

export default App;
