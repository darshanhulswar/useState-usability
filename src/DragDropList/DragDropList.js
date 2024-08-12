import { useState } from "react";

function DragDropList() {
  const [items, SetItems] = useState([
    "Essence Mascara Lash Princess",
    "Very unhappy with my purchase!",
    "Eyeshadow Palette with Mirror",
    "Calvin Klein CK One",
  ]);

  let startIndex;
  let endIndex;

  function handleDragStart(index) {
    startIndex = index;
  }

  function handleDragOver(index) {
    endIndex = index;
  }

  function handleDragEnd() {
    console.log("DRAG_END:");
    const temp = items[startIndex];
    const updatedItems = [...items];
    updatedItems[startIndex] = updatedItems[endIndex];
    updatedItems[endIndex] = temp;

    SetItems(updatedItems);
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
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;

