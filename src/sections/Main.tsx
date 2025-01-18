import { useState } from "react";
import { motion } from "framer-motion";
import { Section, scrollToSection } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

enum Title {
  CURTIS = "curtis",
  CITRUS = "citrus",
  RUSTIC = "rustic",
}

const titleEmojis: { [key in Title]: string } = {
  [Title.CURTIS]: "🐋",
  [Title.CITRUS]: "🍊",
  [Title.RUSTIC]: "🪵",
};

interface MainProps {
  onIntersect: (isIntersecting: boolean) => void;
}

function Main({ onIntersect }: MainProps) {
  const ref = useIntersectionObserver(onIntersect);
  const [currentTitle, setCurrentTitle] = useState<Title>(Title.CURTIS);

  const getNextTitle = () => {
    const titles = Object.values(Title);
    const currentIndex = titles.indexOf(currentTitle);
    const nextIndex = (currentIndex + 1) % titles.length;
    return titles[nextIndex];
  };

  const cycleTitle = () => {
    setCurrentTitle(getNextTitle());
  };

  const titleCharacters = (title: Title) => {
    return title.split("").map((char, index) => {
      return (
        <motion.div key={index} layoutId={char}>
          {char}
        </motion.div>
      );
    });
  };

  return (
    <section id={Section.MAIN} ref={ref} className="section">
      <button id="citrus" onClick={cycleTitle}>
        {titleEmojis[currentTitle]}
      </button>
      <div className="title-characters">{titleCharacters(currentTitle)}</div>
      <button className="orange" onClick={() => scrollToSection(Section.ABOUT)}>
        🟠
      </button>
    </section>
  );
}

export default Main;
