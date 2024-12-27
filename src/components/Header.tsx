import { useState, useEffect } from "react";
import { Section, scrollToSection } from "../Section";

function Header() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.MAIN);

  useEffect(() => {
    const handleScroll = () => {
      const mainSection = document.getElementById(Section.MAIN);
      const projectsSection = document.getElementById(Section.PROJECTS);
      const contactSection = document.getElementById(Section.CONTACT);

      if (!mainSection || !projectsSection || !contactSection) return;

      const scrollPosition = window.scrollY;

      // Check which section is most visible in the viewport
      if (scrollPosition < projectsSection.offsetTop - 100) {
        setCurrentSection(Section.MAIN);
      } else if (scrollPosition < contactSection.offsetTop - 100) {
        setCurrentSection(Section.PROJECTS);
      } else {
        setCurrentSection(Section.CONTACT);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header">
      <div
        id="main"
        onClick={() => scrollToSection(Section.MAIN)}
        className={currentSection === Section.MAIN ? "active" : ""}
      >
        <div>🍊</div>
      </div>

      <div
        id="about"
        onClick={() => scrollToSection(Section.ABOUT)}
        className={currentSection === Section.ABOUT ? "active" : ""}
      >
        <div>Me</div>
        <div className="orange">🟠</div>
      </div>

      <div
        id="projects"
        onClick={() => scrollToSection(Section.PROJECTS)}
        className={currentSection === Section.PROJECTS ? "active" : ""}
      >
        <div>Projects</div>
        <div className="orange">🟠</div>
      </div>

      <div
        id="contact"
        onClick={() => scrollToSection(Section.CONTACT)}
        className={currentSection === Section.CONTACT ? "active" : ""}
      >
        <div>Contact</div>
        <div className="orange">🟠</div>
      </div>
    </div>
  );
}

export default Header;
