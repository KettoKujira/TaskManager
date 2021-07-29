import { useState, useEffect, useCallback } from "react";

import Task from "../Task/Task";
import NewTask from "../NewTask/NewTask";

import "./TasksList.css";

const TasksList = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteTaskHandler = (task) => {
    setTasks(tasks.filter((item) => item !== task));
  };

  const fetchTaskHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://taskmanager-ef021-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const loadedTasks = [];

      for (const key in data) {
        loadedTasks.push({
          id: key,
          title: data[key].title,
          date: new Date(data[key].date),
          content: data[key].content,
        });
      }
      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTaskHandler();
  }, [fetchTaskHandler]);

  async function addTaskHandler(enteredTaskData) {
    await fetch(
      "https://taskmanager-ef021-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      {
        method: "POST",
        body: JSON.stringify(enteredTaskData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.ClickHandler(props.Switch);
  }

  let content = <p>No found tasks.</p>;
  if (tasks.length > 0) {
    content = tasks.map((task) => (
      <Task key={task.id} task={task} onDeleteTask={deleteTaskHandler} />
    ));
  }
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Is loading.</p>;

  return (
    <ul className="main__tasks tasks">
      {props.Switch ? <NewTask onAddTask={addTaskHandler} /> : ""}
      {content}
    </ul>
  );
};

export default TasksList;
