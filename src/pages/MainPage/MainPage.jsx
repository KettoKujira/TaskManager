import Header from "../../components/layout/Header/Header";
import Main from "../../components/layout/Main/Main";
import NewTask from "../../components/NewTask/NewTask";
import propTypes from "./MainPage.props";
import React, { useState } from "react";

const MainPage = (props) => {
  const { tasks } = props;
  const [state, setstate] = useState();

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

  const SwitchHandler = (Switch) => {
    setstate(Switch)
  };

  let NewTaskContent = <></>;

  if (state === true) {
    NewTaskContent = <NewTask onSaveTaskData={saveTaskDataHandler} />
  };

  return (
    <>
      <Header onSwitch={SwitchHandler} />
      <Main tasks={tasks} NewTaskContent={NewTaskContent} upToMainPageDeletedTask={mainPageDeletedTask} />
    </>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
