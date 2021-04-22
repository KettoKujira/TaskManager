import Task from "../Task/Task";
import "./TasksList.css";
import tasksListProps from "./TasksList.props";

const TasksList = (props) => {
  const { tasks } = props;

  return (
    <ul className="main__tasks tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

TasksList.propTypes = tasksListProps;

export default TasksList;
