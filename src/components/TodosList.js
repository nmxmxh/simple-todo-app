import React from "react";
import TodoItem from "./TodoItem";

function TodosList({ todos, deleteTodo, changeTodo }) {
    return (
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
}

export default TodosList;
