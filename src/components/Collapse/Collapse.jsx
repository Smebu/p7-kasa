import React from "react";
import { useState } from "react";

export default function Collapse(props) {
  const [isActive, setIsActive] = useState(false);

  function collapseContent() {
    const content = props.description;

    if (typeof content === "string") {
      return <p className="dropdown_text">{content}</p>;
    } else {
      return (
        <ul>
          {content.map((item, idx) => (
            <li className="collapse_list" key={idx}>{item}</li>
          ))}
        </ul>
      );
    }
  }

  return (
    <article className={props.class}>
      <div className="dropdown_trigger" onClick={() => setIsActive(!isActive)}>
        <h2 className="dropdown_title">{props.title}</h2>
        <img
          src={process.env.PUBLIC_URL + "/vector.png"}
          alt="vector"
          className={isActive ? "dropdown_chevron_rotate" : "dropdown_chevron"}
        />
      </div>
      <div className={isActive ? "dropdown_body_anim" : "dropdown_body"}>
        {collapseContent()}
      </div>
    </article>
  );
}
