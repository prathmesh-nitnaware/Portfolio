import "./ScrollKeepersCabin.css";

const testimonials = [
  {
    name: "Aarti Sharma",
    feedback: "Prathmesh brought clarity and creativity to every project. His dedication to delivering polished solutions is unmatched.",
  },
  {
    name: "Dev Mehra",
    feedback: "A true builder with a learner’s mindset. His Explorer Map portfolio is one of the most unique I've ever seen.",
  },
];

export default function ScrollKeepersCabin({ id }) {
  return (
    <section id={id} className="scroll-cabin">
      <h2 className="cabin-title">📜 Resume & Testimonials</h2>

      <div className="resume-download">
        <a href="/resume.pdf" download className="download-link">
          📥 Download My Resume
        </a>
      </div>
    </section>
  );
}
