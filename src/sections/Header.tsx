import { useState } from "react";
import { Section, scrollToSection } from "../components/SectionNav";

interface HeaderProps {
  activeSection: Section;
}

function Header({ activeSection }: HeaderProps) {
  const sectionNames: { [key in Section]: string } = {
    [Section.MAIN]: "🍊",
    [Section.ABOUT]: "About",
    [Section.PROJECTS]: "Projects",
    [Section.CONTACT]: "Contact",
  };

  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div id="header">
      <div className="header-content">
        {Object.values(Section).map((section) => (
          <div
            key={section}
            id={`header-${section}`}
            onClick={() => scrollToSection(section)}
            className={activeSection === section ? "active" : ""}
          >
            <div>{sectionNames[section]}</div>
            {section !== Section.MAIN && section !== activeSection && (
              <div className="orange">🟠</div>
            )}
          </div>
        ))}
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default Header;
