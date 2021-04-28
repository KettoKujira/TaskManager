import Header from "../components/layout/Header/Header";
import Main from "../components/layout/Main/Main";
import TasksList from "../components/TasksList/TasksList";

const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        <TasksList />
      </Main>
    </>
  );
};

export default MainPage;
