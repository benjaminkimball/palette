import React, { useState } from "react";
import { render } from "react-dom";

import * as colors from "./data/colors";

import ColorGrid from "./components/color-grid";
import Notification from "./components/notification";

const App = () => {
  const [name, setName] = useState();

  return (
    <>
      <Notification name={name} />
      <ColorGrid colors={colors} setName={setName} />
    </>
  );
};

render(<App />, document.getElementById("root"));
