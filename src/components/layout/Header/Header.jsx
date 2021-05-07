import { useState } from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="root__header header">
      <div className="header__container">
        <h1 className="header__title">Taskmanager</h1>
        <button className="header__button button">
          New task
          <span className="header__button-icon" />
        </button>
        <h2 className="header__date">
          Today is <span className="header__date-highlight">19 april 2021</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
