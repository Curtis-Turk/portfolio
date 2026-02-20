import "./App.css";
import { useState } from "react";
import Header from "./sections/Header";
import { NAME } from "./utils/names";
import { useEffect } from "react";
import { NameProvider } from "./hooks/NameContext";
import { SECTION, SECTIONS } from "./utils/sections";
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
          {SECTIONS.map((section) => {
            const SectionComponent = section.component;
            return (
              <SectionComponent
                key={section.id}
                onIntersect={(isIntersecting: boolean) =>
                  handleIntersection(section.id, isIntersecting)
                }
              />
            );
          })}
        </SectionProvider>
      </NameProvider>
    </div>
  );
}

export default App;
