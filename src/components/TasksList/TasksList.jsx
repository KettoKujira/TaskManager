import Task from "../Task/Task";
import "./TasksList.css";

const TasksList = (props) => {
  const { tasks } = props;

  const DeleteTaskHandler = (task) => {
    props.upToMainDeletedTask(task);
  };

  return (
    <ul className="main__tasks tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={DeleteTaskHandler} />
      ))}
    </ul>
  );
};

export default TasksList;
