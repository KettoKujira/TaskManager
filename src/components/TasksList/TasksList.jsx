import { useState } from "react";

import Task from "../Task/Task";
import NewTask from "../NewTask/NewTask";

import "./TasksList.css";

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

const TasksList = (props) => {
  const [tasks, setTasks] = useState(TASKS);

  const deleteTaskHandler = (task) => {
    setTasks(tasks.filter((item) => item !== task));
  };

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random(),
    };
    setTasks((prevTasks) => {
      return [taskData, ...prevTasks];
    });
    props.ClickHandler(props.Switch);
  };

  let NewTaskContent = <></>;

  if (props.Switch === true) {
    NewTaskContent = <NewTask onSaveTaskData={saveTaskDataHandler} />;
  }

  return (
    <ul className="main__tasks tasks">
      {NewTaskContent}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={deleteTaskHandler} />
      ))}
    </ul>
  );
};

export default TasksList;
