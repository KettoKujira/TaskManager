import propTypes from "./Main.props";
import "./Main.css";
import TasksList from "../../TasksList/TasksList";

const Main = (props) => {
  const { tasks } = props;
  const { NewTaskContent } = props;

  const mainDeletedTask = (task) => {
    props.upToMainPageDeletedTask(task);
  };

  return (
    <main className="root__main main">
      <h2 className="main__header">What's up today?</h2>
      { NewTaskContent }
      <TasksList tasks={tasks} upToMainDeletedTask={mainDeletedTask} />
    </main>
  );
};

Main.propTypes = propTypes;

export default Main;
