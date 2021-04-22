import Header from "../../components/layout/Header/Header";
import Main from "../../components/layout/Main/Main";
import TasksList from "../../components/TasksList/TasksList";

import mainPageProps from "./MainPage.props";

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

MainPage.propTypes = mainPageProps;

export default MainPage;
