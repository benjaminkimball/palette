import { h, render } from "preact";

import * as colors from "./data/colors";
import ColorGrid from "./components/color-grid";

const App = () => <ColorGrid colors={colors} />;

const rootElement = document.getElementById("root");
render(<App />, rootElement, rootElement.lastChild);
