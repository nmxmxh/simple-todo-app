import React from "react";

const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through"
};


function TodoItem(props) {
  const { deleteTodo, changeTodo, todo } = props;
  const { completed, id, title } = todo;

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => changeTodo(id)}
      />
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
}

export default TodoItem;
