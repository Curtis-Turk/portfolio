import React from "react";

export enum Section {
  MAIN = "main-section",
  ABOUT = "about-section",
  PROJECTS = "projects-section",
  CONTACT = "contact-section",
}

export const scrollToSection = (sectionId: Section) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

interface SectionNavProps {
  currentSection: Section;
}

export const SectionNav: React.FC<SectionNavProps> = ({ currentSection }) => {
  const sections = Object.values(Section);
  const currentIndex = sections.indexOf(currentSection);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    scrollToSection(sections[nextIndex]);
  };

  return (
    <button className="orange" onClick={handleClick}>
      🟠
    </button>
  );
};
