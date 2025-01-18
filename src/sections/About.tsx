import { Section, SectionNav } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface AboutProps {
  onIntersect: (isIntersecting: boolean) => void;
}

export function About({ onIntersect }: AboutProps) {
  const ref = useIntersectionObserver(onIntersect);

  return (
    <section id={Section.ABOUT} ref={ref} className="section">
      <SectionNav navigateToSection={Section.MAIN} />
      <h2 id="about-title">About</h2>
      <div className="about-content">
        <p>Hi, I'm Curtis.</p>
        <p>Software developer, bike mechanic and all around tinkerer.</p>
      </div>
      <SectionNav navigateToSection={Section.PROJECTS} />
    </section>
  );
}
