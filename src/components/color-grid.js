import { h } from "preact";

import ColorBlock from "./color-block";

export default ({ colors }) => (
  <div class="c-color-grid">
    {Object.entries(colors).map(([name, hexColor]) => (
      <ColorBlock key={name} name={name} hexColor={hexColor} />
    ))}
  </div>
);
