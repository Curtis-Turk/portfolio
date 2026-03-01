import "./App.css";
import Peat from "./experiments/peat/Peat";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NameProvider } from "./hooks/NameContext";
import { useState } from "react";
import { NAME } from "./utils/names";

function App() {
  const [currentName, setCurrentName] = useState<NAME>(NAME.CITRUS);
  return (
    <NameProvider value={{ currentName, setCurrentName }}>
      <BrowserRouter>
        <Routes>
          <Route path="experiments/peat" element={<Peat />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </NameProvider>
  );
}

export default App;
