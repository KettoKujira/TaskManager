import propTypes from "./Main.props";
import "./Main.css";
import TasksList from '../../TasksList/TasksList';

const Main = (props) => {
  const { tasks } = props;

  const mainDeletedTask = (task) => {
    props.upToMainPageDeletedTask(task);
  };

  return (
    <main className="root__main main">
      <h2 className="main__header">What's up today?</h2>
      <TasksList tasks={tasks} upToMainDeletedTask={mainDeletedTask} />
    </main>
  );
};

Main.propTypes = propTypes;

export default Main;
