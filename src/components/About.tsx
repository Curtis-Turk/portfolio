import React from "react";
import { Section } from "../Section";
import { SectionNav } from "./SectionNav";

export const About: React.FC = () => {
  return (
    <section id="about-section">
      <h2 id="about-title">About</h2>
      <div className="about-content">
        <p>Hi, I'm Curtis.</p>
        <p>
          I'm a software developer passionate about creating elegant solutions
          to complex problems.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <div className="technologies">
            {["TypeScript", "React", "Node.js", "Swift", "CSS"].map(
              (skill, index) => (
                <span key={index} className="tech-tag">
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <SectionNav currentSection={Section.ABOUT} />
    </section>
  );
};
