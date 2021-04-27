import "./Main.css"

const Main = (props) => {
  return (
    <main class="root__main main">
      <h2 class="main__title">What&rsquo;s up&nbsp;today?</h2>
      {props.children}
    </main>
  );
};

export default Main;
