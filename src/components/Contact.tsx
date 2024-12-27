import { Section, scrollToSection } from "../Section";

export function Contact() {
  return (
    <section id="contact-section">
      <button
        className="orange"
        onClick={() => scrollToSection(Section.PROJECTS)}
      >
        🟠
      </button>
      <h2 id="contact-title">Get in touch</h2>
      <div id="contact-links">
        <a
          href="https://github.com/Curtis-Turk"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/curtis-turk-bb650b253"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:curtis.c.turk@outlook.com">Email</a>
      </div>
    </section>
  );
}
