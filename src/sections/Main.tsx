import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SectionNav } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { NAME, nameEmojis } from "../utils/names";
import { SECTION } from "../utils/sections";
import { useName } from "../hooks/NameContext";

interface MainProps {
  onIntersect: (isIntersecting: boolean) => void;
}

function Main({ onIntersect }: MainProps) {
  const ref = useIntersectionObserver(onIntersect);
  const { currentName, setCurrentName } = useName();
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
    const titles = Object.values(NAME);
    const currentIndex = titles.indexOf(currentName);
    const nextIndex = (currentIndex + 1) % titles.length;
    return titles[nextIndex];
  };

  const cycleTitle = () => {
    setCurrentName(getNextTitle());
  };

  const titleCharacters = (title: NAME) => {
    return title.split("").map((char, index) => (
      <motion.div key={index} layoutId={char}>
        {char}
      </motion.div>
    ));
  };

  return (
    <section id={SECTION.MAIN} ref={ref} className="section">
      <motion.button
        id="citrus"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={cycleTitle}
      >
        {nameEmojis[currentName].title}
      </motion.button>

      <div className="title-characters">{titleCharacters(currentName)}</div>

      <SectionNav navigateToSection={SECTION.ABOUT} />
    </section>
  );
}

export default Main;
