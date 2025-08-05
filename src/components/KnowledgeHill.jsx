import "./KnowledgeHill.css";

const trail = [
  {
    year: "2025",
    title: "Real‑time Stock Dashboard",
    desc: "Built a live stock analytics dashboard with Streamlit, Plotly & Yahoo Finance.",
  },
  {
    year: "2025",
    title: "Brain Tumor Detection App",
    desc: "Developed ML-based MRI scan classifier (SVM, RandomForest) with a Streamlit UI.",
  },
  {
    year: "2025",
    title: "McKinsey.org Forward Program",
    desc: "Completed the McKinsey.org Forward Program.",
  },
    {
    year: "2025",
    title: "AI/ML Hackathon Finalist",
    desc: "Reached finals in a regional AI hackathon — showcasing solution-building under pressure.",
  },
  {
    year: "2025",
    title: "Deloitte Data Analytics Job Simulation",
    desc: "Completed Deloitte's Data Analytics Job Simulation, gaining hands-on experience in data analysis.",
  },
    {
    year: "2025",
    title: "Walmart- Software Engineering Job Simulation",
    desc: "Completed Walmart's Software Engineering Job Simulation, gaining hands-on experience in software development.",
  },
  {
    year: "2024",
    title: "XR Simulations Dev Intern · FirebirdVR",
    desc: "Interned as XR Simulation Developer at FirebirdVR — worked on immersive VR/AR content creation in Pune.",
  },
  {
    year: "2023",
    title: "B.E. Computer Engineering",
    desc: "Studying at Vidyalankar Institute of Technology, Mumbai (expected 2027).",
  },
];

export default function KnowledgeHill({ id }) {
  return (
    <section id={id} className="knowledge-hill">
      <h2 className="hill-title">📚 Trail Timeline</h2>
      <div className="timeline">
        {trail.map((item, idx) => (
          <div key={idx} className="timeline-item reveal">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-detail">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
