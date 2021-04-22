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
];

ReactDOM.render(
  <React.StrictMode>
    <MainPage tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById("root")
);
