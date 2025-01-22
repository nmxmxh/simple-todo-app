import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { LayoutGroup, motion } from "framer-motion";
import { useLayoutAnims } from "../styles/layout-group";
import { fadeInAnim } from "../styles/simple-fade";

function TodosList({ todos, deleteTodo, changeTodo }) {
  const { animations } = useLayoutAnims("out");

    return (
      <Style.Container>
        <LayoutGroup>
        {todos.length ? todos?.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            deleteTodo={deleteTodo}
            animations={animations}
          />
        )) : <motion.h2 className="empty-list" {...fadeInAnim}>no todos available</motion.h2>}
        </LayoutGroup>
      </Style.Container>
    );
}

const Style = {
  Container: styled.div`
    h2.empty-list {
      text-align: center;
      margin-top: 20px;
      font-weight: 400;
      font-size: 14px;
    }
  `
}

export default TodosList;
