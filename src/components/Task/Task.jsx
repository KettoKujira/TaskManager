import OurDate from "../OurDate/OurDate";
import "./Task.css";

const Task = (props) => {
  const { task } = props;

  const clickDeleteHandler = () => {
    props.onDeleteTask(task);
  };

  return (
    <li className="tasks__item task">
      <p className="task__date">
        <OurDate date={task.date} />
      </p>
      <h3 className="task__title">{task.title}</h3>
      <p className="task__content">{task.content}</p>
      <button
        className="task__delete-button button"
        onClick={clickDeleteHandler}
      />
    </li>
  );
};

export default Task;
