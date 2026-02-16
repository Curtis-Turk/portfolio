import React from "react";
import { SECTION } from "../utils/sections";
import { nameEmojis } from "../utils/names";
import { useName } from "../hooks/NameContext";

export const scrollToSection = (sectionId: SECTION) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

interface SectionNavProps {
  navigateToSection: SECTION;
}

export const SectionNav: React.FC<SectionNavProps> = ({
  navigateToSection,
}) => {
  const sections = Object.values(SECTION);
  const sectionIndex = sections.indexOf(navigateToSection);
  const { currentName } = useName();

  const handleClick = () => {
    scrollToSection(sections[sectionIndex]);
  };

  return (
    <button className="orange" onClick={handleClick}>
      {nameEmojis[currentName].colourDot}
    </button>
  );
};
