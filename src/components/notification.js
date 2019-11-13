import { h } from "preact";

const Notification = ({ name }) => {
  if (!name) return null;

  return (
    <div class="c-notification">
      <div class="c-notification__body">
        <strong>{name} copied to clipboard!</strong>
      </div>
    </div>
  );
};

export default Notification;
