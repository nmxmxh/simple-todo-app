import React from "react";
import styled from "styled-components";


function TodoItem(props) {
  const { deleteTodo, changeTodo, todo } = props;
  const { completed, id, title } = todo;

  return (
    <Style.Container>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => changeTodo(id)}
      />
      <p className={completed ? "span-completed" : null}>{title}</p>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </Style.Container>
  );
}

const Style = {
  Container: styled.li`
    list-style-type: none;
    padding: 17px 0px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    input {
      margin-right: 15px;
      margin-top: 5px;
    }

    button {
      background: #d35e0f;
      color: #fff;
      border: 1px solid #d35e0f;
      padding: 5px 10px;
      cursor: pointer;
      outline: none;
      transition: color 0.25s ease-in, background 0.25s ease-out;

      &:hover {
        background: #fff;
        color: #d35e0f;
      }
    }

    p {
      text-decoration-color: transparent;
      transition: opacity 0.25s ease-in, text-decoration-color 0.25s ease-out;
      width: 80%;
      padding: 0;
      margin: 0;
      text-align: left;
    }

    p.p-completed {
      font-style: italic;
      color: #d35e0f;
      opacity: 0.4;
      text-decoration: line-through;
      text-decoration-color: auto;
    }
  `
}

export default TodoItem;
