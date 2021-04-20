import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header>
        <h1>Taskmanager</h1>
        <button>New task +</button>
        <span>Today is 19 april 2021</span>
      </header>
      <main>
        <h2>What's up today?</h2>
        <div>
          <span>19 april 2021</span>
          <h3>Learn to code</h3>
          <p>Today i will learn how to manage store.</p>
          <button>Delete</button>
        </div>
      </main>
    </div>
  );
};

export default App;