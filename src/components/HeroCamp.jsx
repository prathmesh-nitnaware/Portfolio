import "./HeroCamp.css";
import profileImg from "../assets/your-photo.jpg"; // ✅ replace with your image

export default function HeroCamp({ id }) {
  return (
    <section id={id} className="hero-camp">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">🏕️ Hello, 👋</h1>
          <p className="hero-desc">
            Hi, I’m <strong>Prathmesh</strong>.<br />
            Exploring ideas. Building worlds.<br />
            Navigate through my creative & technical journey.
          </p>
        </div>
        <div className="hero-img-wrapper">
          <img src={profileImg} alt="Prathmesh" className="hero-img-framed" />

        </div>
      </div>
    </section>
  );
}
