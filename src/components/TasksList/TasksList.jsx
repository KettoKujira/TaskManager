import tasksListProps from "./TaskList.props";
import Task from "../Task/Task";
import "./TasksList.css";

const TasksList = (props) => {
  const {tasks} = props;

  return (
    <ul className="main__tasks tasks">
      <Task task={tasks[0]} />
      <Task task={tasks[1]} />
      <Task task={tasks[2]} />
      <Task task={tasks[3]} />
    </ul>
  );
};

TasksList.propTypes = tasksListProps;

export default TasksList;
