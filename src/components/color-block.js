import { h } from "preact";

let lastTimeout = null;

export default ({ name, hexColor, setName }) => (
  <div
    class="c-color-block"
    style={{ backgroundColor: hexColor }}
    onClick={() => {
      if (lastTimeout) clearTimeout(lastTimeout);

      navigator.clipboard.writeText(hexColor.slice(1)).catch(console.error);

      setName(name);

      lastTimeout = setTimeout(() => setName(), 2500);
    }}
  >
    <h2 class="c-color-block__name">
      {name} <code>{hexColor}</code>
    </h2>
  </div>
);
