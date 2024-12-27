import { Section, scrollToSection } from "../Section";

function Main() {
  return (
    <section id="main-section">
      <h1 id="main-title">Citrus</h1>
      <button className="orange" onClick={() => scrollToSection(Section.ABOUT)}>
        🟠
      </button>
    </section>
  );
}
export default Main;
