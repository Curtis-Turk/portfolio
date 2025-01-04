import { useRef, useEffect } from "react";
import { Section, scrollToSection } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface MainProps {
  onIntersect: (isIntersecting: boolean) => void;
}

function Main({ onIntersect }: MainProps) {
  const ref = useIntersectionObserver(onIntersect);

  return (
    <section id={Section.MAIN} ref={ref} className="section">
      <h1 id="main-title">Citrus</h1>
      <button className="orange" onClick={() => scrollToSection(Section.ABOUT)}>
        🟠
      </button>
    </section>
  );
}

export default Main;
