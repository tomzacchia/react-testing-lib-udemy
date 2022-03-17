import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("red");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const newBgColor = bgColor === "red" ? "blue" : "red";

  function clickHandler() {
    setBgColor(newBgColor);
  }

  return (
    <>
      <button
        onClick={clickHandler}
        style={{ backgroundColor: bgColor }}
        disabled={isButtonDisabled}
      >
        change to {newBgColor}
      </button>
      <input
        type="checkbox"
        onClick={(e) => setIsButtonDisabled(e.target.checked)}
      />
    </>
  );
}

export default App;
