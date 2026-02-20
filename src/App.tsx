import "./App.css";
import { useState } from "react";
import Header from "./sections/Header";
import Main from "./sections/Main";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";
import { NAME } from "./utils/names";
import { useEffect } from "react";
import { NameProvider } from "./hooks/NameContext";
import { SECTION } from "./utils/sections";
import { SectionProvider } from "./hooks/SectionContext";

function App() {
  const [currentName, setCurrentName] = useState<NAME>(NAME.CITRUS);
  const [activeSection, setActiveSection] = useState<SECTION>(SECTION.MAIN);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", currentName);
  }, [currentName]);

  const handleIntersection = (section: SECTION, isIntersecting: boolean) => {
    if (isIntersecting) {
      setActiveSection(section);
    }
  };

  return (
    <div className="App">
      <NameProvider
        value={{ currentName: currentName, setCurrentName: setCurrentName }}
      >
        <SectionProvider>
          <Header activeSection={activeSection} />
          <Main
            onIntersect={(isIntersecting) =>
              handleIntersection(SECTION.MAIN, isIntersecting)
            }
          />
          <About
            onIntersect={(isIntersecting) =>
              handleIntersection(SECTION.ABOUT, isIntersecting)
            }
          />
          <Projects
            onIntersect={(isIntersecting) =>
              handleIntersection(SECTION.PROJECTS, isIntersecting)
            }
          />
          <Contact
            onIntersect={(isIntersecting) =>
              handleIntersection(SECTION.CONTACT, isIntersecting)
            }
          />
        </SectionProvider>
      </NameProvider>
    </div>
  );
}

export default App;
