import Task from "../Task/Task";
import "./TasksList.css";

const TASK = {
  id: 1,
  date: "22 april 2021",
  title: "Hello world",
  content: "Today is awesome day!",
};

const TasksList = () => {
  return (
    <ul className="main__tasks tasks">
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
      <Task task={TASK} />
    </ul>
  );
};

export default TasksList;
