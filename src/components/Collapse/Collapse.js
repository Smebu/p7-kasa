// import React from "react";
import { useState } from "react";

export default function Collapse(props) {
  const [isActive, setIsActive] = useState(false);

  // function collapseContent() {
  //   const content = props.content;

  //   if (typeof content === "string") {
  //     return <p className="dropdown_text">{content}</p>;
  //   } else {
  //     return (
  //       <ul>
  //         {content.map((item) => (
  //           <li className="collapse_list">{item}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }
  console.log("test");
  if (props.origin === "about") {
    return (
      <article className="dropdown_container" key={props.id}>
        <div
          className="dropdown_trigger"
          onClick={() => setIsActive(!isActive)}
        >
          <h2 className="dropdown_title">{props.title}</h2>
          <img
            src="./vector.png"
            alt="vector"
            className={
              isActive ? "dropdown_chevron_rotate" : "dropdown_chevron"
            }
          />
        </div>
        <div className={isActive ? "dropdown_body_anim" : "dropdown_body"}>
          {props.description}
        </div>
      </article>
    );
  } else if (props.origin === "card") {
    return (
      <section className="dropdown">
        <article className="dropdown_container">
          <div
            className="dropdown_trigger"
            onClick={() => setIsActive(!isActive)}
          >
            <h2 className="dropdown_title">{props.title}</h2>
            <img
              src="./vector.png"
              alt="vector"
              className={
                isActive ? "dropdown_chevron_rotate" : "dropdown_chevron"
              }
            />
          </div>
          <div className={isActive ? "dropdown_body" : "dropdown_body_anim"}>
            {/* {collapseContent()} */}
          </div>
        </article>
      </section>
    );
  }
}
