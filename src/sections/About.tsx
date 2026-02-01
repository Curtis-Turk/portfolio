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
      <h2 id="about-title">Hi, I'm Curtis</h2>
      <div className="about-content">
        <p>💻 Software developer</p>
        <p>🚲 Bike mechanic</p>
        <p>
          🍏 Currently working as an iOS developer for{" "}
          <a
            href="https://www.hl.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            HL
          </a>
        </p>
        <p>
          🌹 Building progressive tools with{" "}
          <a
            href="https://www.campaignlab.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Campaign Lab
          </a>
        </p>
      </div>
      <SectionNav navigateToSection={Section.PROJECTS} />
    </section>
  );
}
