import React from "react";
import { Section, scrollToSection } from "../Section";

interface SectionNavProps {
  currentSection: Section;
}

export const SectionNav: React.FC<SectionNavProps> = ({ currentSection }) => {
  const sections = Object.values(Section);
  const currentIndex = sections.indexOf(currentSection);

  const handleClick = () => {
    // If we're at the last section, go to first, otherwise go to next
    const nextIndex = (currentIndex + 1) % sections.length;
    scrollToSection(sections[nextIndex]);
  };

  return (
    <button className="orange" onClick={handleClick}>
      🟠
    </button>
  );
};
