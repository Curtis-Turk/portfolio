import "./App.css";
import { useState } from "react";
import Header from "./sections/Header";
import Main from "./sections/Main";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";
import { Title } from "./utils/names";
import { Section } from "./utils/sections";

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.MAIN);
  const [currentTitle, setCurrentTitle] = useState<Title>(Title.CURTIS);

  const handleIntersection = (section: Section, isIntersecting: boolean) => {
    if (isIntersecting) {
      setActiveSection(section);
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} currentTitle={currentTitle} />
      <Main
        onIntersect={(isIntersecting) =>
          handleIntersection(Section.MAIN, isIntersecting)
        }
        currentTitle={currentTitle}
        setCurrentTitle={setCurrentTitle}
      />
      <About
        onIntersect={(isIntersecting) =>
          handleIntersection(Section.ABOUT, isIntersecting)
        }
      />
      <Projects
        onIntersect={(isIntersecting) =>
          handleIntersection(Section.PROJECTS, isIntersecting)
        }
      />
      <Contact
        onIntersect={(isIntersecting) =>
          handleIntersection(Section.CONTACT, isIntersecting)
        }
      />
    </div>
  );
}

export default App;
