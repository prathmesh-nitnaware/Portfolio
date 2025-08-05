import "./ProjectRuins.css";

export default function ProjectRuins({ id }) {
  return (
    <section id={id} className="project-ruins">
      <h2 className="section-title">🏛️ Project Ruins</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>📈 Real-time Stock Dashboard</h3>
          <p>An interactive dashboard to track and analyze live stock market data using Streamlit, Plotly, and Yahoo Finance.</p>
          <ul>
            <li>🔍 Search any stock (AAPL, TSLA, INFY)</li>
            <li>📊 Candlestick, Moving Averages, RSI</li>
            <li>💱 INR Toggle, 📥 CSV export, 📰 Yahoo News</li>
          </ul>
          <a href="https://github.com/prathmesh-nitnaware/stock-dashboard" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        </div>

        <div className="project-card">
          <h3>🧠 Brain Tumor Detection</h3>
          <p>Detects brain tumors from MRI scans using multiple ML models. Includes Streamlit UI and confidence score outputs.</p>
          <ul>
            <li>✅ SVM, Random Forest, SMOTE Balancing</li>
            <li>📊 Feature Reduction, p-value testing</li>
            <li>🧪 Dual mode: Upload or Manual input</li>
          </ul>
          <a href="https://github.com/prathmesh-nitnaware/brain-tumor-detection" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        </div>

                <div className="project-card">
          <h3>🎬 Virtual Movie Streamer</h3>
          <p>A React-based multi-user platform for real-time movie watching, chat, and WebRTC-based video conferencing.</p>
          <ul>
            <li>📺 Host-controlled video sync</li>
            <li>🎥 Webcam + mic, mute/unmute</li>
            <li>💬 Group chat & live reactions</li>
          </ul>
          <a href="https://github.com/prathmesh-nitnaware/Virtual-Movie-Streamer" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        </div>

        <div className="project-card">
          <h3>📰 Fake News Detector</h3>
          <p>Classifies news articles as real or fake using NLP and ML. BERT and Tfidf models deployed via Flask.</p>
          <ul>
            <li>🔍 Real-time text analysis</li>
            <li>🧠 Logistic Regression & BERT</li>
            <li>🚀 Fast & responsive web app</li>
          </ul>
          <a href="https://github.com/prathmesh-nitnaware/Fake-News-Detection" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        </div>
      </div>
    </section>
  );
}
