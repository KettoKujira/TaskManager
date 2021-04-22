import propTypes from "./Main.props";
import "./Main.css";

const Main = (props) => {
  return (
    <main className="root__main main">
      <h2 className="main__header">What's up today?</h2>
      {props.children}
    </main>
  );
};

Main.propTypes = propTypes;

export default Main;
