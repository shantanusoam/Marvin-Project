import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

import ModelSection from "./Components/ModelSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bgImage">
        <Navbar />
        <ModelSection />
      </div>
    </>
  );
}

export default App;
