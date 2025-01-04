import "./App.css";
import Header from "./sections/Header";
import Main from "./sections/Main";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
