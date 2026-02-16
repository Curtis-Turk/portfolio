import { useState } from "react";
import { scrollToSection } from "../components/SectionNav";
import { nameEmojis } from "../utils/names";
import { SECTION, sectionNames } from "../utils/sections";
import { useName } from "../hooks/NameContext";

interface HeaderProps {
  activeSection: SECTION;
}

function Header({ activeSection }: HeaderProps) {
  const [theme, setTheme] = useState<string>("dark");
  const { currentName } = useName();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div id="header">
      <div className="header-content">
        {Object.values(SECTION).map((section) => (
          <button
            key={section}
            id={`header-${section}`}
            onClick={() => scrollToSection(section)}
            className={activeSection === section ? "active" : ""}
          >
            {section === SECTION.MAIN
              ? nameEmojis[currentName].title
              : sectionNames[section]}
            {section !== SECTION.MAIN && section !== activeSection && (
              <div className="orange header-orange">
                {nameEmojis[currentName].colourDot}
              </div>
            )}
          </button>
        ))}
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
      </div>
    </div>
  );
}

export default Header;
