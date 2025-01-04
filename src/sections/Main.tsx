import { Section, scrollToSection } from "../components/SectionNav";

function Main() {
  return (
    <section id={Section.MAIN} className="section">
      <h1 id="main-title">Citrus</h1>
      <button className="orange" onClick={() => scrollToSection(Section.ABOUT)}>
        🟠
      </button>
    </section>
  );
}
export default Main;
