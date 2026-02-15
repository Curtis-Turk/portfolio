import { useState } from "react";
import { scrollToSection } from "../components/SectionNav";
import { Title, titleEmojis } from "../utils/names";
import { Section, sectionNames } from "../utils/sections";

interface HeaderProps {
  activeSection: Section;
  currentTitle: Title;
}

function Header({ activeSection, currentTitle }: HeaderProps) {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div id="header">
      <div className="header-content">
        {Object.values(Section).map((section) => (
          <button
            key={section}
            id={`header-${section}`}
            onClick={() => scrollToSection(section)}
            className={activeSection === section ? "active" : ""}
          >
            {section === Section.MAIN
              ? titleEmojis[currentTitle]
              : sectionNames[section]}
            {section !== Section.MAIN && section !== activeSection && (
              <div className="orange header-orange">🟠</div>
            )}
          </button>
        ))}
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
      </div>
    </div>
  );
}

export default Header;
