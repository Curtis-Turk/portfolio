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
  navigateToSection: Section;
}

export const SectionNav: React.FC<SectionNavProps> = ({
  navigateToSection,
}) => {
  const sections = Object.values(Section);
  const sectionIndex = sections.indexOf(navigateToSection);

  const handleClick = () => {
    scrollToSection(sections[sectionIndex]);
  };

  return (
    <button className="orange" onClick={handleClick}>
      🟠
    </button>
  );
};
