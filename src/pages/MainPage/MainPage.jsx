import Header from "../../components/layout/Header/Header";
import Main from "../../components/layout/Main/Main";
import TasksList from "../../components/TasksList/TasksList";

import propTypes from "./MainPage.props";

const MainPage = (props) => {
  const { tasks } = props;

  return (
    <>
      <Header />
      <Main>
        <TasksList tasks={tasks} />
      </Main>
    </>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
