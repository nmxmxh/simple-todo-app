import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

function TodosList({ todos, deleteTodo, changeTodo }) {
    return (
      <Style.Container>
        {todos.length ? todos?.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
          />
        )) : <p>no todos available</p>}
      </Style.Container>
    );
}

const Style = {
  Container: styled.div`
    p {
      text-align: center;
      margin-top: 20px;
    }
  `
}

export default TodosList;
