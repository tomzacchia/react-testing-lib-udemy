import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [bgColor, setBgColor] = useState("red");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const newBgColor = bgColor === "red" ? "blue" : "red";
  const btnBgColor = isButtonDisabled ? "grey" : bgColor;

  function clickHandler() {
    setBgColor(newBgColor);
  }

  return (
    <>
      <button
        onClick={clickHandler}
        style={{ backgroundColor: btnBgColor }}
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
      <label htmlFor="disabled-button-checkbox">disable button</label>
    </>
  );
}

export default App;
