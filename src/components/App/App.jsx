import MainPage from "../../pages/MainPage/MainPage";
import propTypes from "./App.props";

const App = (props) => {
  const { tasks } = props;
  return <MainPage tasks={tasks} />;
};

App.propTypes = propTypes;

export default App;
