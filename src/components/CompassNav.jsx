import "./CompassNav.css";

export default function CompassNav() {
  const links = [
    { id: "home", label: "⛺ Camp" },
    { id: "skills", label: "🔧 Tools" },
    { id: "projects", label: "🏛️ Ruins" },
    { id: "education", label: "📚 Hill" },
    { id: "highlight", label: "💎 Cave" },
    { id: "contact", label: "📡 Tower" },
    { id: "resume", label: "📜 Cabin" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="compass-nav">
      {links.map((link) => (
        <button key={link.id} onClick={() => scrollTo(link.id)} className="nav-btn">
          {link.label}
        </button>
      ))}
    </nav>
  );
}
