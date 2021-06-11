import "./Header.css";
import React, { useState } from "react";
import OurDate from "../../OurDate/OurDate";

const Header = (props) => {
  const [Switch, setSwitch] = useState(false);

  const clickHandler = () => {
    setSwitch((Switch) => !Switch);
  };

  props.onSwitch(Switch);

  return (
    <header className="root__header header">
      <div className="header__container">
        <h1 className="header__title">Taskmanager</h1>
        <button className="header__button button" onClick={clickHandler}>
          New task
          <span className="header__button-icon" />
        </button>
        <h2 className="header__date">
          Today is{" "}
          <span className="header__date-highlight">
            <OurDate date={new Date()} />
          </span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
