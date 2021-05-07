import Header from "../../components/layout/Header/Header";
import Main from "../../components/layout/Main/Main";
import TasksList from "../../components/TasksList/TasksList";
import NewTask from '../../components/NewTask/NewTask';
import propTypes from "./MainPage.props";

const MainPage = (props) => {
  const {tasks} = props;

  return (
    <>
      <Header />
      <NewTask />
      <Main>
        <TasksList tasks={tasks}/>
      </Main>
    </>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
