import React, { Component, useState } from "react";

function InputTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if (value) addTodo(value);
    setValue("");
  };
  
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={value}
        name="title"
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
}
export default InputTodo;
