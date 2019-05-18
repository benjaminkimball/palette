import { h } from "preact";

export default ({ name, hexColor }) => (
  <div class="c-color-block" style={`background-color: ${hexColor};`}>
    <h2 class="c-color-block__name">
      {name} <code>{hexColor}</code>
    </h2>
  </div>
);
