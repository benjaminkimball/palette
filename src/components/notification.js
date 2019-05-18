import { h } from "preact";

export default ({ name }) => {
  if (!name) return null;

  return (
    <div class="c-notification">
      <div class="c-notification__body">
        <strong>{name} copied to clipboard!</strong>
      </div>
    </div>
  );
};
