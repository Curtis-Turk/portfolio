import { useEffect, useState } from "react";
import { SECTION, SECTIONS } from "../utils/sections";
import { useName } from "../hooks/NameContext";
import { SectionProvider } from "../hooks/SectionContext";
import Header from "../components/Header";
import { PrevNextNav } from "../components/PrevNextNav";
import { SectionWithSync } from "../components/SectionWithSync";

const Home = () => {
  const [activeSection, setActiveSection] = useState<SECTION>(SECTION.MAIN);
  const { currentName } = useName();

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
    </div>
  );
};
export default Home;
