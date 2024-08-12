import { useState } from "react";

function CharacterCounter() {
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
      <h1>Character Counter</h1>
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
      <h2>Number of Characters: {text.length}</h2>
    </div>
  );
}

export default CharacterCounter;

