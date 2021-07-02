import React from "react";
import ReactDOM from "react-dom";

import classes from "./Greeting.module.css";

const Greeting = () => {
  return ReactDOM.createPortal(
    <div className={classes.container}>
      <div className={classes.title}>
        <h1 className={classes.text}>TASKMANAGER.</h1>
      </div>
    </div>,
    document.getElementById("greeting-root")
  );
};

export default Greeting;
