import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App";
import "./assets/styles/index.css";

const TASKS = [
  {
    id: 1,
    date: new Date(2021, 3, 22),
    title: "Hello World",
    content: "Today is awesome day!",
  },
  {
    id: 2,
    date: new Date(2021, 3, 22),
    title: "Hi World",
    content: "Today is a great night!",
  },
  {
    id: 3,
    date: new Date(2021, 3, 22),
    title: "Bye World",
    content: "Today is big evening!",
  },
  {
    id: 4,
    date: new Date(2021, 3, 22),
    title: "Goodbye World",
    content: "Today is good morning!",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById("root")
);
