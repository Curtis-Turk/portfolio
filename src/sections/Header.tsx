import { Section, scrollToSection } from "../components/SectionNav";

interface HeaderProps {
  activeSection: Section;
}

function Header({ activeSection }: HeaderProps) {
  const sectionNames = {
    [Section.MAIN]: "🍊",
    [Section.ABOUT]: "About",
    [Section.PROJECTS]: "Projects",
    [Section.CONTACT]: "Contact",
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
      </div>
    </div>
  );
}

export default Header;
