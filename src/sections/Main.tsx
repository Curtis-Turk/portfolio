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

  const renderTitle = (title: Title) => {
    return title.split("").map((char, index) => {
      const nextTitle = getNextTitle();
      const targetPosition = nextTitle.indexOf(char);
      const xOffset = (targetPosition - index) * 40;

      return (
        <motion.span
          key={index}
          initial={{ x: xOffset }}
          animate={{ x: 0 }}
          exit={{ x: -xOffset }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          // className={`letter ${animate ? "swap-animation" : ""}`}
        >
          {char}
        </motion.span>
      );
    });
  };

  return (
    <section id={Section.MAIN} ref={ref} className="section">
      <button id="citrus" onClick={cycleTitle}>
        {titleEmojis[currentTitle]}
      </button>
      <h1 id="main-title">{renderTitle(currentTitle)}</h1>
      <button className="orange" onClick={() => scrollToSection(Section.ABOUT)}>
        🟠
      </button>
    </section>
  );
}

export default Main;
