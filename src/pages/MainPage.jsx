const MainPage = () => {
  return (
    <>
      <header className="root__header header">
        <div className="header__container">
          <h1 className="header__title">Taskmanager</h1>
          <button className="header__button button">
            New task
            <span className="header__button-icon" />
          </button>
          <h2 className="header__date">
            Today is{" "}
            <span className="header__date-highlight">19 april 2021</span>
          </h2>
        </div>
      </header>
      <main className="root__main main">
        <h2 className="main__header">What's up today?</h2>
        <ul className="main__tasks tasks">
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
          <li className="tasks__item task">
            <p className="task__date">19 april 2021</p>
            <h3 className="task__title">Learn to code</h3>
            <p className="task__content">
              Today I will learn how to manage state.
            </p>
            <button className="task__delete-button button" />
          </li>
        </ul>
      </main>
    </>
  );
};

export default MainPage;
