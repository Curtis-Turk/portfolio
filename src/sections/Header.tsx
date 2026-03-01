import { useState } from "react";
import { nameEmojis } from "../utils/names";
import { SECTION, SECTIONS } from "../utils/sections";
import { useName } from "../hooks/NameContext";
import { useSection } from "../hooks/SectionContext";

interface HeaderProps {
  activeSection: SECTION;
}

function Header({ activeSection }: HeaderProps) {
  const [theme, setTheme] = useState<string>("dark");
  const { currentName } = useName();
  const { navigateTo } = useSection();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div id="header" className="header-content">
      <button onClick={() => navigateTo(SECTION.MAIN)}>
        {nameEmojis[currentName].title}
      </button>
      <div className="header-sections">
        {SECTIONS.slice(1).map((section) => (
          <button
            key={section.id}
            id={`header-${section}`}
            onClick={() => navigateTo(section.id)}
            className={activeSection === section.id ? "active" : ""}
          >
            {section.title}
          </button>
        ))}
      </div>
      <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
    </div>
  );
}

export default Header;
