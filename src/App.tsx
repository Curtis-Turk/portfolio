import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { NAME } from "./utils/names";
import { useEffect } from "react";
import { NameProvider } from "./hooks/NameContext";
import { SECTION, SECTIONS } from "./utils/sections";
import { SectionProvider, useSection } from "./hooks/SectionContext";
import PrevNextNav from "./components/PrevNextNav";

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
}

function SectionWithSync({
  section,
  SectionComponent,
  onAppIntersect,
}: {
  section: any;
  SectionComponent: React.ComponentType<any>;
  onAppIntersect: (section: SECTION, isIntersecting: boolean) => void;
}) {
  const { setActiveSection } = useSection();

  return (
    <SectionComponent
      onIntersect={(isIntersecting: boolean) => {
        if (isIntersecting) {
          setActiveSection(section.id);
        }
        onAppIntersect(section.id, isIntersecting);
      }}
    />
  );
}

export default App;
