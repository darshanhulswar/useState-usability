import { useState } from "react";

function ControlledInputField() {
  const [text, setText] = useState("");

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
      <h1>Controlled Input Field App</h1>
      <input
        style={{
          width: "90%",
          padding: "0.4em",
          margin: "auto",
          display: "block",
        }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p style={{ textAlign: "center" }}>
        Text that you have entered will show below
      </p>
      <h4>{text}</h4>
    </div>
  );
}

export default ControlledInputField;

