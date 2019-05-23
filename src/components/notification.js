import React from "react";

export default ({ name }) => {
  if (!name) return null;

  return (
    <div className="c-notification">
      <div className="c-notification__body">
        <strong>{name} copied to clipboard!</strong>
      </div>
    </div>
  );
};
