import React, { Component, useState } from "react";
import styled from "styled-components";

function InputTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if (value) addTodo(value);
    setValue("");
  };
  
  return (
    <Style.Container onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-title"
        placeholder="add todo..."
        value={value}
        name="title"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="button-submit" disabled={!value.length} value="Submit">submit</button>
    </Style.Container>
  );
}

const Style = {
  Container: styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    margin-bottom: 20px;

    input.input-title {
      width: 80%;
      font-size: 16px;
      padding: 12px 15px;
      border: 1px solid #cecece;
      outline: none;
      font-weight: 400;
      height: 100%;

      &::placeholder {
        color: #999;
      }
    }

    button.button-submit {
      width: 17.5%;
      background: #038203;
      color: #fff;
      cursor: pointer;
      font-weight: 400;
      outline: none;
      height: 100%;
      transition: background 0.25s ease-in,
        color 0.25s ease-out, opacity 0.25s linear;
      font-weight: 600;
      border: 2px solid #038203;
      font-size: 16px;

      &:disabled {
        background-color: grey;
        color: white;
        opacity: 0.4;
        cursor: not-allowed;
        border: 2px solid grey;
        transition: background 0.25s ease-in,
        color 0.25s ease-out, opacity 0.25s linear;

        &:hover {
          color: white;
          background-color: grey;
        }
      }

      &:hover {
        background: #fff;
        color: #038203;
      }
    }
  `
}

export default InputTodo;
