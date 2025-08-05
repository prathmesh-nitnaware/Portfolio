import { useEffect } from "react";
import { revealOnScroll } from "./utils/scrollReveal";

import CompassNav from "./components/CompassNav";

import HeroCamp from "./components/HeroCamp";
import SkillsTent from "./components/SkillsTent";
import ProjectRuins from "./components/ProjectRuins";
import KnowledgeHill from "./components/KnowledgeHill";
import TreasureCave from "./components/TreasureCave";
import SignalTower from "./components/SignalTower";
import ScrollKeepersCabin from "./components/ScrollKeepersCabin";
import MiniMapNav from "./components/MiniMapNav";

export default function App() {
  useEffect(() => {
    revealOnScroll();
  }, []);

  return (
    <>
      <MiniMapNav />
      <CompassNav />
      <HeroCamp id="home" />
      <SkillsTent id="skills" />
      <ProjectRuins id="projects" />
      <KnowledgeHill id="education" />
      <TreasureCave id="highlight" />
      <SignalTower id="contact" />
      <ScrollKeepersCabin id="resume" />
    </>
  );
}
