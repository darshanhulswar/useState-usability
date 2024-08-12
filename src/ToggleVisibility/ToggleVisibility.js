import { useState } from "react";

function TextVisibility() {
  const [textVisibility, setTextVisibility] = useState(false);

  function visibilityHandler() {
    setTextVisibility(!textVisibility);
  }

  return (
    <div
      style={{
        margin: "20px",
        padding: "10px",
        backgroundColor: "#669bbc",
        borderRadius: "0.3em",
        color: "#fdf0d5",
        display: "inline-block",
      }}
    >
      <h1>Text Toggler</h1>
      <button onClick={visibilityHandler}>
        {textVisibility ? "HIDE TEXT" : "SHOW TEXT"}
      </button>
      {textVisibility && <h1>This text can be toggled to show/hide</h1>}
    </div>
  );
}

export default TextVisibility;

