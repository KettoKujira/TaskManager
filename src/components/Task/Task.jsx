import "./Task.css";

const Task = () => {
  return (
    <li className="tasks__item task">
      <p className="task__date">19 april 2021</p>
      <h3 className="task__title">Learn to code</h3>
      <p className="task__content">Today I will learn how to manage state.</p>
      <button className="task__delete-button button" />
    </li>
  );
};

export default Task;
