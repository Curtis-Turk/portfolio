import { useEffect, useState } from "react";
import { NAME } from "../utils/names";
import { SECTION, SECTIONS } from "../utils/sections";
import { NameProvider } from "../hooks/NameContext";
import { SectionProvider } from "../hooks/SectionContext";
import Header from "../components/Header";
import { PrevNextNav } from "../components/PrevNextNav";
import { SectionWithSync } from "../components/SectionWithSync";

const Home = () => {
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
          <PrevNextNav />
          {SECTIONS.map((section) => {
            const SectionComponent = section.component;

            return (
              <div key={section.id} className="section-wrapper">
                {SectionComponent && (
                  <SectionWithSync
                    section={section}
                    SectionComponent={SectionComponent}
                    onAppIntersect={handleIntersection}
                  />
                )}
              </div>
            );
          })}
        </SectionProvider>
      </NameProvider>
    </div>
  );
};
export default Home;
