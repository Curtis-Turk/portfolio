import "./App.css";
import Peat from "./pages/Peat";
import Home from "./pages/Home";

function App() {
  if (typeof window !== "undefined" && window.location.pathname === "/peat") {
    return <Peat />;
  }
  return <Home />;
}

export default App;
