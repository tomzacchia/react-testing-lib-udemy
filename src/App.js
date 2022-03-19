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
        id="disabled-button-checkbox"
        // NOTE: to indicate whether or not checkbox is checked to screen-reader
        defaultChecked={isButtonDisabled}
        aria-checked={isButtonDisabled}
        onClick={(e) => setIsButtonDisabled(e.target.checked)}
      />
      <label htmlFor="disabled-button-checkbox">Disabled button</label>
    </>
  );
}

export default App;
