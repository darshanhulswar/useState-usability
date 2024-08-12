import { useState } from "react";
import Counter from "./Counter/Counter";
import ControlledInputField from "./ControlledInputField/ControlledInputField";
import TextVisibility from "./ToggleVisibility/ToggleVisibility";
import CharacterCounter from "./CharacterCounter/CharacterCounter";
import ColorSwitcher from "./ColorSwitcher/ColorSwitcher";
import Todo from "./Todo/Todo";
import SearchFilter from "./SearchFilter/SearchFilter";
import DragDropList from "./DragDropList/DragDropList";

function App() {
  // eslint-disable-next-line
  const [activeApp, setActiveApp] = useState({
    COUNTER_APP: true,
    CONTROLLED_INPUT_FIELD_APP: false,
    TEXT_VISIBILITY_APP: false,
    CHARACTER_COUNTER_APP: false,
    COLOR_SWITCHER_APP: false,
    TODO_APP: false,
    SEARCH_FILTER_APP: false,
    DRAGDROP_APP: false,
  });

  function handleAppSwitch(e) {
    const newActiveAppState = Object.keys(activeApp).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    setActiveApp({
      ...newActiveAppState,
      [e.target.value]: true,
    });
  }

  return (
    <>
      <div>
        <div>
          <input
            type="radio"
            id="counte-app"
            name="apps"
            value="COUNTER_APP"
            checked={activeApp.COUNTER_APP}
            onChange={handleAppSwitch}
          />
          <label htmlFor="counter-app">Counter</label>
        </div>

        <div>
          <input
            type="radio"
            id="controlled-input-field"
            name="apps"
            value="CONTROLLED_INPUT_FIELD_APP"
            checked={activeApp.CONTROLLED_INPUT_FIELD_APP}
            onChange={handleAppSwitch}
          />
          <label htmlFor="controlled-input-field">Controlled Input Field</label>
        </div>

        <div>
          <input
            type="radio"
            id="text-visibility"
            name="apps"
            value="TEXT_VISIBILITY_APP"
            checked={activeApp.TEXT_VISIBILITY_APP}
            onChange={handleAppSwitch}
          />
          <label htmlFor="text-visibility">Text Visibility App</label>
        </div>

        <div>
          <input
            type="radio"
            id="character-counter-app"
            name="apps"
            value="CHARACTER_COUNTER_APP"
            checked={activeApp.CHARACTER_COUNTER_APP}
            onChange={handleAppSwitch}
          />
          <label htmlFor="character-counter-app">Character Counter App</label>
        </div>

        <div>
          <input
            type="radio"
            id="color-switcher-app"
            name="apps"
            value="COLOR_SWITCHER_APP"
            onChange={handleAppSwitch}
            checked={activeApp.COLOR_SWITCHER_APP}
          />
          <label htmlFor="color-switcher-app">Color Switcher App</label>
        </div>

        <div>
          <input
            type="radio"
            id="todo-app"
            name="apps"
            value="TODO_APP"
            checked={activeApp.TODO_APP}
            onChange={handleAppSwitch}
          />
          <label htmlFor="todo-app">Todo App</label>
        </div>

        <div>
          <input
            type="radio"
            id="search-filter-app"
            name="apps"
            value="SEARCH_FILTER_APP"
            checked={activeApp.SEARCH_FILTER_APP}
            onChange={handleAppSwitch}
          />
          <label htmlFor="search-filter-app">Search Filter App</label>
        </div>

        <div>
          <input
            type="radio"
            id="drag-and-drop-app"
            name="apps"
            value="DRAGDROP_APP"
            checked={activeApp.DRAGDROP_APP}
            onChange={handleAppSwitch}
          />
          <label htmlFor="drag-and-drop-app">Drag and Drop App</label>
        </div>
      </div>

      {activeApp.COUNTER_APP && <Counter />}
      {activeApp.CONTROLLED_INPUT_FIELD_APP && <ControlledInputField />}
      {activeApp.TEXT_VISIBILITY_APP && <TextVisibility />}
      {activeApp.CHARACTER_COUNTER_APP && <CharacterCounter />}
      {activeApp.COLOR_SWITCHER_APP && <ColorSwitcher />}
      {activeApp.TODO_APP && <Todo />}
      {activeApp.SEARCH_FILTER_APP && <SearchFilter />}
      {activeApp.DRAGDROP_APP && <DragDropList />}
    </>
  );
}

export default App;

