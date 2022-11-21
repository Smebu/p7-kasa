import React from "react";

function LodgmentTags(props) {
  return (
    <ul className="lodgment_tags">
      {props.tags.map((tag, idx) => {
        return (
          <li className="lodgment_tag" key={idx}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

export default LodgmentTags;
