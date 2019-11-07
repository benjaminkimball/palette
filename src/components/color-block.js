import React from "react";
import { func, string } from "prop-types";

let lastTimeout = null;

const ColorBlock = ({ name, hexColor, setName }) => (
  <div
    className="c-color-block"
    style={{ backgroundColor: hexColor }}
    onClick={() => {
      if (lastTimeout) clearTimeout(lastTimeout);

      navigator.clipboard.writeText(hexColor.slice(1)).catch(console.error);

      setName(name);

      lastTimeout = setTimeout(() => setName(), 2500);
    }}
  >
    <h2 className="c-color-block__name">
      {name} <code>{hexColor}</code>
    </h2>
  </div>
);

ColorBlock.propTypes = {
  name: string.isRequired,
  hexColor: string.isRequired,
  setName: func.isRequired
};

export default ColorBlock;
