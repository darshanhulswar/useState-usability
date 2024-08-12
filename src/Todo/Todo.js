import { useState } from "react";
import TaskList from "./TaskList.js";

const initialTodos = [
  {
    id: 1,
    todo: "Do something nice for someone you care about",
    completed: false,
    userId: 152,
  },
  { id: 2, todo: "Memorize a poem", completed: true, userId: 13 },
];

function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  const [todoText, setTodoText] = useState("");
  const [todoCount, setTodoCount] = useState(todos.length);

  function addTodoHanlder(todo) {
    setTodos([...todos, { id: todoCount + 1, todo: todo, completed: false }]);
    setTodoText("");
    setTodoCount(todoCount + 1);
  }

  function deleteTodoHandler(id) {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        } else return false;
      })
    );
  }

  function todoTextHanlder(text) {
    setTodoText(text);
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
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <input
        type="text"
        onChange={(e) => {
          todoTextHanlder(e.target.value);
        }}
        value={todoText}
      />
      <input
        type="button"
        onClick={() => {
          addTodoHanlder(todoText);
        }}
        value="Add"
      />

      {todos.map((todo) => {
        return (
          <TaskList key={todo.id} todo={todo} onDelete={deleteTodoHandler} />
        );
      })}
    </div>
  );
}

export default Todo;

