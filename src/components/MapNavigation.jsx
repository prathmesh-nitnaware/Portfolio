import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "🏕️ Hero Camp" },
  { id: "skills", label: "🔧 Tools" },
  { id: "projects", label: "🏛️ Ruins" },
  { id: "education", label: "📚 Hill" },
  { id: "highlight", label: "💎 Cave" },
  { id: "contact", label: "📡 Tower" },
  { id: "resume", label: "📜 Cabin" },
];

export default function MapNavigation() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  // 🔍 Scroll Spy with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveId(visibleSection.target.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 🌐 Desktop Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 bg-parchment border border-forest text-forest rounded-full shadow-lg px-4 py-2 z-50 gap-3 text-sm backdrop-blur-md"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`transition-all ${
              activeId === section.id
                ? "font-bold underline text-forest"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            {section.label}
          </a>
        ))}
      </motion.nav>

      {/* 📱 Mobile Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-parchment border border-forest text-forest p-2 rounded-md shadow-md"
        >
          {open ? "❌ Close" : "📜 Menu"}
        </button>
      </div>

      {/* 📱 Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-parchment shadow-xl z-40 p-6 flex flex-col gap-4 text-lg border-r border-forest"
          >
            <h2 className="text-xl font-bold mb-4">🗺️ Explorer Menu</h2>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className={`transition-all ${
                  activeId === section.id
                    ? "font-bold underline text-forest"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {section.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
