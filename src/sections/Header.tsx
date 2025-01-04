import { useState, useEffect } from "react";
import { Section, scrollToSection } from "../components/SectionNav";

function Header() {
  const [activeSection, setActiveSection] = useState(Section.MAIN);

  const sectionNames = {
    [Section.MAIN]: "🍊",
    [Section.ABOUT]: "About",
    [Section.PROJECTS]: "Projects",
    [Section.CONTACT]: "Contact",
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const sections = Object.values(Section);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= windowHeight * 0.3 &&
            rect.bottom >= windowHeight * 0.3
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {section !== Section.MAIN && <div className="orange">🟠</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
