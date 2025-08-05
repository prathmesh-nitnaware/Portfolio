import { useEffect, useState } from "react";
import "./MiniMapNav.css";

const sections = [
  { id: "home", label: "Camp" },
  { id: "skills", label: "Tools" },
  { id: "projects", label: "Ruins" },
  { id: "education", label: "Hill" },
  { id: "highlight", label: "Treasure" },
  { id: "contact", label: "Tower" },
  { id: "resume", label: "Cabin" },
];

export default function MiniMapNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(section.id);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mini-map">
      {sections.map((s) => (
        <button
          key={s.id}
          className={`mini-btn ${active === s.id ? "active" : ""}`}
          onClick={() =>
            document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
