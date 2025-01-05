import { useState } from "react";
import { Section, scrollToSection } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

enum Title {
  NONE = " ",
  CITRUS = "Citrus",
  CURTIS = "Curtis",
  RUSTIC = "Rustic",
}

interface MainProps {
  onIntersect: (isIntersecting: boolean) => void;
}

function Main({ onIntersect }: MainProps) {
  const ref = useIntersectionObserver(onIntersect);
  const [currentTitle, setCurrentTitle] = useState<Title>(Title.NONE);

  const cycleTitle = () => {
    const titles = Object.values(Title);
    const currentIndex = titles.indexOf(currentTitle);
    const nextIndex = (currentIndex + 1) % titles.length;
    setCurrentTitle(titles[nextIndex]);
  };

  return (
    <section id={Section.MAIN} ref={ref} className="section">
      <button id="citrus" onClick={cycleTitle}>
        🍊
      </button>
      <h1 id="main-title">{currentTitle}</h1>
      <button className="orange" onClick={() => scrollToSection(Section.ABOUT)}>
        🟠
      </button>
    </section>
  );
}

export default Main;
