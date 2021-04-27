import "./Header.css"

const Header = () => {
  return (
    <header class="root__header header">
      <div class="header__container">
        <h1 class="header__title">Taskmanager</h1>
        <button class="header__button button">
          New task<span class="header__button-icon"></span>
        </button>
        <span class="header__date">
          Today&nbsp;is{" "}
          <span class="header__date-color">19&nbsp;april 2021</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
