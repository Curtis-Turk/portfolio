import React from "react";
import { Section, SectionNav } from "../components/SectionNav";

export const About: React.FC = () => {
  return (
    <section id="about-section" className="section">
      <h2 id="about-title">About</h2>
      <div className="about-content">
        <p>Hi, I'm Curtis.</p>
        <p>Software developer, bike mechanic and all around tinkerer.</p>
      </div>
      <SectionNav currentSection={Section.ABOUT} />
    </section>
  );
};
