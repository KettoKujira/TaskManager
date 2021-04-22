import Task from "../Task/Task";
import "./TasksList.css";
import tasksListProps from "./TasksList.props";

const TasksList = (props) => {
  const { tasks } = props;

  return (
    <ul className="main__tasks tasks">
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
      <Task task={tasks[0]} />
    </ul>
  );
};

TasksList.propTypes = tasksListProps;

export default TasksList;
