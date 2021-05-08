import Header from "../../components/layout/Header/Header";
import Main from "../../components/layout/Main/Main";
import TasksList from "../../components/TasksList/TasksList";
import NewTask from "../../components/NewTask/NewTask";
import propTypes from "./MainPage.props";

const MainPage = (props) => {
  const { tasks } = props;

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random(),
    };
    props.onAddTask(taskData);
  };

  const mainPageDeletedTask = (task) => {
    props.onDeleteTask(task);
  };

  return (
    <>
      <Header />
      <NewTask onSaveTaskData={saveTaskDataHandler} />
      <Main tasks={tasks} upToMainPageDeletedTask={mainPageDeletedTask} />
    </>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
