import { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("");

  function colorHanlder(newColor) {
    setColor(newColor);
  }

  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        backgroundColor: color || "#669bbc",
        borderRadius: "0.3em",
        color: "#fdf0d5",
        display: "inline-block",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Color Switcher</h1>
      <label htmlFor="pet-select">Choose a Color:</label>

      <select
        name="color"
        style={{
          width: "90%",
          padding: "0.4em",
          margin: "auto",
          display: "block",
        }}
        onChange={(e) => colorHanlder(e.target.value)}
      >
        <option value="">-- Please choose a Color --</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="brown">Brown</option>
        <option value="green ">Green</option>
        <option value="orange">Orange</option>
      </select>

      <h4>{color}</h4>
    </div>
  );
}

export default ColorSwitcher;

