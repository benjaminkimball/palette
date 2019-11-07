import React from "react";
import { string } from "prop-types";

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

Notification.propTypes = {
  name: string
};

export default Notification;
