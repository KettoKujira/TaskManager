const MainPage = () => {
  return (
    <>
    <header class="root__header header">
    <div class="header__container">
      <h1 class="header__title">Taskmanager</h1>
      <button class="header__button button">New task<span class="header__button-icon"></span></button>
      <span class="header__date">Today&nbsp;is <span class="header__date-color">19&nbsp;april 2021</span></span>
    </div>
  </header>

  <main class="root__main main">
      <h2 class="main__title">What&rsquo;s up&nbsp;today?</h2>
      <ul class="main__tasks tasks">
        <li class="tasks__item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius expedita eveniet molestias dolorem, illo, hic eum consectetur nisi voluptas ut&nbsp;non. Sunt, quidem. Quidem harum esse dolorum ipsam iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius expedita eveniet molestias dolorem, illo, hic eum consectetur nisi voluptas ut&nbsp;non. Sunt, quidem. Quidem harum esse dolorum ipsam iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius expedita eveniet molestias dolorem, illo, hic eum consectetur nisi voluptas ut&nbsp;non. Sunt, quidem. Quidem harum esse dolorum ipsam iure?
          </p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
        <li class="tasks-item task">
          <span class="task__date">19&nbsp;april 2021</span>
          <h3 class="task__title">Learn to&nbsp;code</h3>
          <p class="task__descr">Today I&nbsp;will learn how to&nbsp;manage state.</p>
          <button class="task__delete-button button"></button>
        </li>
      </ul>
  </main>
  </>
  );
}

export default MainPage;