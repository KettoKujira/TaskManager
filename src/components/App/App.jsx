import React, { useState, useEffect } from "react";

import Greeting from "../Greeting/Greeting";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const Visible = () => {
    setIsVisible(false);
  };

  setTimeout(Visible, 4000);

  return (
    <>
      {isVisible ? <Greeting /> : ''}
      <Header />
      <Main />
    </>
  );
};

export default App;
