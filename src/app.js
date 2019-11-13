import { h, Fragment, render } from "preact";
import { useState } from "preact/hooks";

import * as colors from "./data/colors";

import ColorGrid from "./components/color-grid";
import Notification from "./components/notification";

const App = () => {
  const [name, setName] = useState();

  return (
    <Fragment>
      <Notification name={name} />
      <ColorGrid colors={colors} setName={setName} />
    </Fragment>
  );
};

const rootEl = document.getElementById("root");

render(<App />, rootEl, rootEl.lastChild);
