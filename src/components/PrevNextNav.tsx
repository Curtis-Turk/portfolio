import React from "react";
import { SECTIONS, SECTION } from "../utils/sections";
import { useSection } from "../hooks/SectionContext";
import { useName } from "../hooks/NameContext";
import { nameEmojis } from "../utils/names";

export const PrevNextNav: React.FC = () => {
  const { activeSection, navigateTo } = useSection();
  const { currentName } = useName();

  const ordered = SECTIONS.sort((a, b) => a.order - b.order);
  const idx = ordered.findIndex((s) => s.id === activeSection);
  if (idx === -1) return null;

  const prev = ordered[idx - 1];
  const next = ordered[idx + 1];

  return (
    <>
      {prev && (
        <button
          className="prev-fixed"
          aria-label="Previous section"
          onClick={() => navigateTo(prev.id as SECTION)}
        >
          {nameEmojis[currentName].colourDot}
        </button>
      )}

      {next && (
        <button
          className="next-fixed"
          aria-label="Next section"
          onClick={() => navigateTo(next.id as SECTION)}
        >
          {nameEmojis[currentName].colourDot}
        </button>
      )}
    </>
  );
};

export default PrevNextNav;
