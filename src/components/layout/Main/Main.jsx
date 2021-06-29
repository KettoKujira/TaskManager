import { useState } from "react";

import TasksList from "../../TasksList/TasksList";

import "./Main.css";

const Main = () => {
  const [Switch, setSwitch] = useState(false);

  const ClickHandler = () => {
    setSwitch((Switch) => !Switch);
  };

  return (
    <main className="root__main main">
      <div className="main__header-container">
        <h2 className="main__header">What's up today?</h2>
        <button className="header__button button" onClick={ClickHandler}>
          New task
          <span className="header__button-icon" />
        </button>
      </div>
      <TasksList Switch={Switch} ClickHandler={ClickHandler} />
    </main>
  );
};

export default Main;
