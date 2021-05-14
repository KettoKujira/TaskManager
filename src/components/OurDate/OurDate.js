import React from "react";

const OurDate = (props) => {
  const { date } = props;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return <>{`${day} ${month} ${year}`}</>;
};

export default OurDate;
