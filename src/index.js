// import React from "react";
// import ReactDOM from "react-dom";
// //component file
// import TodoContainer from "./components/TodoContainer";
// import "./App.css";

// ReactDOM.render(<TodoContainer />, document.getElementById("root"));

// ! initial method is deprecated.
// ! new method added based on console warning.
// ! documentation at https://stackoverflow.com/questions/71945583/react-dom-client-webpack-imported-module-1-render-is-not-a-function-show-in-t

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
