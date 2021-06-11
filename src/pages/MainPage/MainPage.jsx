import Header from "../../components/layout/Header/Header";
import Main from "../../components/layout/Main/Main";
import NewTask from "../../components/NewTask/NewTask";
import React, { useState } from "react";

const MainPage = (props) => {
  const { tasks } = props;
  const [isVisible, setIsVisible] = useState();

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
    setIsVisible(Switch)
  };

  let NewTaskContent = <></>;

  if (isVisible === true) {
    NewTaskContent = <NewTask onSaveTaskData={saveTaskDataHandler} />
  };

  return (
    <>
      <Header onSwitch={SwitchHandler} />
      <Main tasks={tasks} NewTaskContent={NewTaskContent} upToMainPageDeletedTask={mainPageDeletedTask} />
    </>
  );
};

export default MainPage;
