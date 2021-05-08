import Header from "../../components/layout/Header/Header";
import Main from "../../components/layout/Main/Main";
import TasksList from "../../components/TasksList/TasksList";
import NewTask from '../../components/NewTask/NewTask';
import propTypes from "./MainPage.props";

const MainPage = (props) => {
  const {tasks} = props;

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random()
    }
    props.onAddTaks(taskData);
  };

  return (
    <>
      <Header />
      <NewTask onSaveTaskData={saveTaskDataHandler} />
      <Main>
        <TasksList tasks={tasks}/>
      </Main>
    </>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
