import { useState } from "react";
import { scrollToSection } from "../components/SectionNav";
import { nameEmojis } from "../utils/names";
import { SECTION, SECTIONS } from "../utils/sections";
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
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            id={`header-${section}`}
            onClick={() => scrollToSection(section.id)}
            className={activeSection === section.id ? "active" : ""}
          >
            {section.id === SECTION.MAIN
              ? nameEmojis[currentName].title
              : section.title}
          </button>
        ))}
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
      </div>
    </div>
  );
}

export default Header;
