import { Section, SectionNav } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface ContactProps {
  onIntersect: (isIntersecting: boolean) => void;
}

export function Contact({ onIntersect }: ContactProps) {
  const ref = useIntersectionObserver(onIntersect);

  return (
    <section id={Section.CONTACT} ref={ref} className="section">
      <SectionNav navigateToSection={Section.MAIN} />
      <h2>Contact</h2>
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
