import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SECTION } from "../utils/sections";

interface ContactProps {
  onIntersect: (isIntersecting: boolean) => void;
}

export function Contact({ onIntersect }: ContactProps) {
  const ref = useIntersectionObserver(onIntersect);

  return (
    <section id={SECTION.CONTACT} ref={ref} className="section">
      <h2>Contact</h2>
      <div id="contact-links">
        <a
          href="https://github.com/Curtis-Turk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/curtis-turk-bb650b253"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          LinkedIn
        </a>
        <a href="mailto:curtis.c.turk@outlook.com">Email</a>
      </div>
    </section>
  );
}
