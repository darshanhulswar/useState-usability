import { useState } from "react";
import { products as sampleProducts } from "./products";

function SearchFilter() {
  const [search, setSearch] = useState("");
  const products = [...sampleProducts];

  function searchInputHandler(e) {
    setSearch(e.target.value);
  }

  let filteredItems = products.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

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
      <h1>Filterable list</h1>
      <input
        style={{
          width: "90%",
          padding: "0.4em",
          margin: "auto",
          display: "block",
        }}
        type="text"
        value={search}
        onChange={searchInputHandler}
      />
      <ul>
        {filteredItems.map((item) => {
          return <li key={item.id}>{item.title} </li>;
        })}
      </ul>
    </div>
  );
}

export default SearchFilter;

