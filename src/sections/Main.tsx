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

  const [selected, setSelected] = useState(1);

  const ITEMS = [1, 2, 3];

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
          className="title-letter"
        >
          {char}
        </motion.span>
      );
    });
  };

  const titleCharacters = () => {
    return Title.CURTIS.split("").map((char, index) => {
      return (
        <motion.div
          key={index}
          className={`title-letter position-${index + 1}`}
        >
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
      <h1 id="main-title">{renderTitle(currentTitle)}</h1>
      <div className="title-characters">{titleCharacters()}</div>
      <button className="orange" onClick={() => scrollToSection(Section.ABOUT)}>
        🟠
      </button>

      <div className="items">
        {ITEMS.map((item) => (
          <div
            onClick={() => setSelected(item)}
            onKeyDown={(event: { key: string }) =>
              event.key === "Enter" ? setSelected(item) : null
            }
            tabIndex={0}
            className="item"
          >
            <div>Item {item}</div>
            {item === selected ? (
              <motion.div layoutId="arrow">
                <div>🟠</div>
              </motion.div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;
