import React from "react";

function lodgmentTitle(props) {
  return (
    <div>
      <h1 className="lodgment_title">{props.title}</h1>
      <h2 className="lodgment_location">{props.location}</h2>
    </div>
  );
}

export default lodgmentTitle;
