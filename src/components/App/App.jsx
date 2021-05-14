import MainPage from "../../pages/MainPage/MainPage";
import propTypes from "./App.props";
import React, { useState } from "react";

const TASKS = [
  {
    id: 1,
    date: new Date(2021, 3, 22),
    title: "Hello World",
    content: "Today is awesome day!",
  },
  {
    id: 2,
    date: new Date(2020, 4, 21),
    title: "Hi World",
    content: "Today is a great night!",
  },
  {
    id: 3,
    date: new Date(2019, 5, 20),
    title: "Bye World",
    content: "Today is big evening!",
  },
  {
    id: 4,
    date: new Date(2018, 6, 19),
    title: "Goodbye World",
    content: "Today is good morning!",
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  const deleteTaskHandler = (task) => {
    setTasks(tasks.filter((item) => item !== task));
  };

  return (
    <MainPage
      tasks={tasks}
      onAddTask={addTaskHandler}
      onDeleteTask={deleteTaskHandler}
    />
  );
};

App.propTypes = propTypes;

export default App;
