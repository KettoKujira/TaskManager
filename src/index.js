import React from "react";
import ReactDOM from "react-dom";

import MainPage from "./pages/MainPage";
import "./assets/styles/index.css";

const TASKS = [
  {
    id: 1,
    date: "19 april 2021",
    title: "Hello",
    content: "Today is awesome day!",
  },
  {
    id: 2,
    date: "20 april 2021",
    title: "Hello world",
    content: "Today is awesome day!",
  },
  {
    id: 3,
    date: "21 april 2021",
    title: "Hello world wassup",
    content: "Today is awesome day!",
  },
  {
    id: 4,
    date: "22 april 2021",
    title: "Hello Hello world wassup maaan",
    content: "Today is awesome day!",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <MainPage tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById("root")
);
