import "./App.css";
import { useState } from "react";
import { Section } from "./components/SectionNav";
import Header from "./sections/Header";
import Main from "./sections/Main";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.MAIN);

  const handleIntersection = (section: Section, isIntersecting: boolean) => {
    if (isIntersecting) {
      setActiveSection(section);
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <Main
        onIntersect={(isIntersecting) =>
          handleIntersection(Section.MAIN, isIntersecting)
        }
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
