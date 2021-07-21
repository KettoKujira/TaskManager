import React, { useState, useEffect } from "react";

import Greeting from "../Greeting/Greeting";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";

const App = () => {
  const [isVisible, setIsVisible] = useState();

  const Visible = () => {
    setIsVisible(true);
    setTimeout(()=>{setIsVisible((isVisible) => !isVisible)}, 4000);
  };

  useEffect(Visible, []);

  return (
    <>
      {isVisible && <Greeting />}
      <Header Visible={Visible} />
      <Main />
    </>
  );
};

export default App;
