import OurDate from "../../OurDate/OurDate";

import "./Header.css";

const Header = () => {
  return (
    <header className="root__header header">
      <div className="header__container">
        <h1 className="header__title">Taskmanager</h1>
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
