import "./SignalTower.css";

export default function SignalTower({ id }) {
  return (
    <section id={id} className="signal-tower">
      <h2>📡 Send a Signal</h2>

      <form
        action="https://formspree.io/f/mrblawaz"
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/prathmesh-nitnaware"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-btn">🔗 LinkedIn</button>
        </a>

        <a
          href="https://github.com/prathmesh-nitnaware"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="social-btn">💻 GitHub</button>
        </a>

        <a href="mailto:nitnaware.prathmesh@gmail.com">
          <button className="social-btn">📨 Contact Me</button>
        </a>
      </div>
    </section>
  );
}
