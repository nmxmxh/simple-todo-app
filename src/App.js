import React, { useState } from "react";
import TodosList from "./components/TodosList";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { v4 as uuidv4 } from "uuid";
import "./App.css"

function App() {
  const [todosState, setTodosState] = useState({
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  });

  function handleTodoChange(id) {
    setTodosState({
      todos: todosState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  function handleDeleteTodo(id) {
    setTodosState({
      todos: [
        todosState.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    })
  }

  function handleAddTodo(title) {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodosState({
      todos: [...todosState.todos, newTodo],
    })
  }

    return (
      <div className="App">
        <Header />
        <InputTodo addTodo={handleAddTodo} />
        <TodosList
          todos={todosState.todos}
          changeTodo={handleTodoChange}
          deleteTodo={handleDeleteTodo}
        />
      </div>
    );
}

export default App;
