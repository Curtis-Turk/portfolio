import { Section, scrollToSection } from "../components/SectionNav";

function Header() {
  return (
    <div id="header">
      <div id="main" onClick={() => scrollToSection(Section.MAIN)}>
        <div>🍊</div>
      </div>

      <div id="about" onClick={() => scrollToSection(Section.ABOUT)}>
        <div>About</div>
        <div className="orange">🟠</div>
      </div>

      <div id="projects" onClick={() => scrollToSection(Section.PROJECTS)}>
        <div>Projects</div>
        <div className="orange">🟠</div>
      </div>

      <div id="contact" onClick={() => scrollToSection(Section.CONTACT)}>
        <div>Contact</div>
        <div className="orange">🟠</div>
      </div>
    </div>
  );
}

export default Header;
