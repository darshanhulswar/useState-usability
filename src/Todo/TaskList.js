function TaskList({ todo, onDelete }) {
  return (
    <div>
      <h4>{todo.todo}</h4>
      <input type="button" value="Delete" onClick={() => onDelete(todo.id)} />
    </div>
  );
}

export default TaskList;

