import React from "react";

const Notification = ({ name }) => {
  if (!name) return null;

  return (
    <div className="c-notification">
      <div className="c-notification__body">
        <strong>{name} copied to clipboard!</strong>
      </div>
    </div>
  );
};

export default Notification;
