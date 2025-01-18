import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const bounce = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      bounce.start({
        y: [0, -15, 15, -15, 15, 0],
        transition: { duration: 0.7 },
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [bounce]);

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
    return title.split("").map((char, index) => (
      <motion.div key={index} layoutId={char}>
        {char}
      </motion.div>
    ));
  };

  return (
    <section id={Section.MAIN} ref={ref} className="section">
      <motion.button
        id="citrus"
        key={currentTitle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={cycleTitle}
      >
        {titleEmojis[currentTitle]}
      </motion.button>

      <div className="title-characters">{titleCharacters(currentTitle)}</div>

      <motion.button
        className="orange"
        onClick={() => scrollToSection(Section.ABOUT)}
        animate={bounce}
      >
        🟠
      </motion.button>
    </section>
  );
}

export default Main;
