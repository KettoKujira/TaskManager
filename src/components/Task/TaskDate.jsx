import React from "react";

const TaskDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return <>{day + " " + month + " " + year}</>;
};

export default TaskDate;
