import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

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
