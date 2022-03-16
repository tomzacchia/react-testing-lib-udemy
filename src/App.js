import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("red");
  const newBgColor = bgColor === "red" ? "blue" : "red";

  function clickHandler() {
    setBgColor(newBgColor);
  }

  return (
    <button onClick={clickHandler} style={{ backgroundColor: bgColor }}>
      change to {newBgColor}
    </button>
  );
}

export default App;
