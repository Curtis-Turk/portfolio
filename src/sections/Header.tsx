import { useEffect, useState } from "react";
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

  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

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
            {sectionNames[section]}
            {section !== Section.MAIN && section !== activeSection && (
              <div className="orange">🟠</div>
            )}
          </button>
        ))}
        <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "🌞"}</button>
      </div>
    </div>
  );
}

export default Header;
