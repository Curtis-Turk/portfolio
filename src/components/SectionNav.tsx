import React from "react";
import { SECTION } from "../utils/sections";
import { nameEmojis } from "../utils/names";
import { useSection } from "../hooks/SectionContext";
import { useName } from "../hooks/NameContext";

interface SectionNavProps {
  navigateToSection: SECTION;
}

export const SectionNav: React.FC<SectionNavProps> = ({
  navigateToSection,
}) => {
  const { navigateTo } = useSection();
  const { currentName } = useName();

  const handleClick = () => {
    navigateTo(navigateToSection);
  };

  return (
    <button className="orange" onClick={handleClick}>
      {nameEmojis[currentName].colourDot}
    </button>
  );
};
