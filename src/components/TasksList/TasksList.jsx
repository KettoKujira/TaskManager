import propTypes from "./TaskList.props";
import Task from "../Task/Task";
import "./TasksList.css";
import React, { useState } from "react";

const TasksList = (props) => {
  const [tasks, setTasks] = useState(props.tasks);

  const DeleteTaskHandler = (task) => {
    setTasks(tasks.filter(item => item !== task));
    console.log(task);
  };

  return (
    <ul className="main__tasks tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={DeleteTaskHandler} />
      ))}
    </ul>
  );
};

TasksList.propTypes = propTypes;

export default TasksList;
