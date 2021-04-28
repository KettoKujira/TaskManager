import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./pages/MainPage";
import "./assets/styles/index.css";

const TASKS = [
  {
    id: 1,
    date: "22 april 2021",
    title: "Hello World",
    content: "Today is awesome day!",
  },
  {
    id: 2,
    date: "21 april 2021",
    title: "Hi World",
    content: "Today is a great night!",
  },
  {
    id: 3,
    date: "20 april 2021",
    title: "Bye World",
    content: "Today is big evening!",
  },
  {
    id: 4,
    date: "19 april 2021",
    title: "Goodbye World",
    content: "Today is good morning!",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <MainPage tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById("root")
);
