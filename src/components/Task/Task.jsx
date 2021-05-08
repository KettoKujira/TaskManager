import propTypes from "../../props/task.prop";
import "./Task.css";

const Task = (props) => {
  const { task } = props;

  const month = task.date.toLocaleString("en-US", { month: "long" });
  const day = task.date.toLocaleString("en-US", { day: "2-digit" });
  const year = task.date.getFullYear();

  return (
    <li className="tasks__item task">
      <p className="task__date">{day + " " + month + " " + year}</p>
      <h3 className="task__title">{task.title}</h3>
      <p className="task__content">{task.content}</p>
      <button className="task__delete-button button" />
    </li>
  );
};

Task.propTypes = propTypes;

export default Task;
