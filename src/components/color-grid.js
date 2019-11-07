import React from "react";
import { func, shape, string } from "prop-types";

import ColorBlock from "./color-block";

const ColorGrid = ({ colors, setName }) => (
  <div className="c-color-grid">
    {Object.entries(colors).map(([name, hexColor]) => (
      <ColorBlock
        key={name}
        name={name}
        hexColor={hexColor}
        setName={setName}
      />
    ))}
  </div>
);

ColorGrid.propTypes = {
  colors: shape({
    name: string,
    hexColor: string
  }).isRequired,
  setName: func.isRequired
};

export default ColorGrid;
