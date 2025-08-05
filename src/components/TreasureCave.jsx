import "./TreasureCave.css";

export default function TreasureCave({ id }) {
  return (
    <section id={id} className="treasure-cave">
      <h2 className="section-title">💎 Treasure Cave</h2>
      <div className="highlight-card">
        <h3>Dr. Quick</h3>
        <p>
          A hyperlocal, AI-powered platform for instant doctor consultations, medicine delivery,
          smart chatbot assistance, and medical e-commerce — all under one roof.
        </p>
        <ul>
          <li>🩺 Instant doctor video consultations (coming soon)</li>
          <li>💊 10–30 min medicine delivery with live tracking</li>
          <li>🤖 AI-powered health assistant for daily queries</li>
          <li>🛒 Medical marketplace for fast checkout</li>
          <li>📍 Location-based discovery and help</li>
        </ul>
        <p className="ongoing-label">(Ongoing)</p>
      </div>
    </section>
  );
}
