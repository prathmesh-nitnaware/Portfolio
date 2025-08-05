import { useEffect, useRef, useState } from "react";
import "./SkillsTent.css";

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 95 },
  { name: "C++", level: 85 },
  { name: "Django", level: 80 },
  { name: "Git", level: 70 },
  { name: "Machine Learning", level: 80 },
  { name: "Web Development", level: 75 },
  { name: "Android App Development", level: 65 },
];

export default function SkillsTent({ id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className="skills-section" ref={ref}>
      <h2 className="skills-title">🛠️ Backpack Tools</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-bar">
            <span className="skill-name">{skill.name}</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  transition: "width 2s ease",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
