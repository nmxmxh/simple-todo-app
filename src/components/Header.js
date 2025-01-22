import React from "react";
import styled from "styled-components";

function Header()  {
  return (
    <Style.Container>
      <h1>
        Simple Todo App
      </h1>
      <p>
        Please add to-dos item(s) through the input field
      </p>
    </Style.Container>
  );
};

const Style = {
  Container: styled.header`
      padding: 20px 0;
      line-height: 2em;

      h1 {
        font-size: 25px;
        margin-bottom: 15px;
        text-transform: uppercase;
        text-decoration: underline;
      }

      p {
        font-size: 19px;
        text-transform: lowercase;
      }
  `
}

export default Header;
