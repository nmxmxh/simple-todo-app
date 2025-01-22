import React, { useState } from "react";
import TodosList from "./components/TodosList";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
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
      todos: 
        todosState.todos.filter((todo) => {
          return todo.id !== id;
        }),
    })
  }

  function handleAddTodo(title) {
    if (!title.trim()) return;
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
      <Style.AppContainer className="App">
        <Header />
        <InputTodo addTodo={handleAddTodo} />
        <TodosList
          todos={todosState.todos}
          changeTodo={handleTodoChange}
          deleteTodo={handleDeleteTodo}
        />
      </Style.AppContainer>
    );
}

const Style = {
  AppContainer: styled.div`
    padding: 25px;
    width: 45vw;
    margin: auto;

    @media (max-width: 768px) {
      width: 95%;
      padding: 10px;
    }
  `
}

export default App;
