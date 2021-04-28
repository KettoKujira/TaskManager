import PropTypes from "prop-types";
import "./Task.css";

const Task = (props) => {
  const { task } = props;

  return (
    <li className="tasks__item task">
      <p className="task__date">{task.date}</p>
      <h3 className="task__title">{task.title}</h3>
      <p className="task__content">{task.content}</p>
      <button className="task__delete-button button" />
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
