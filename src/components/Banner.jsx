import React from "react";

function Banner(props) {
  if (props.origin === "home") {
    return (
      <section className="banner_home">
        <h2>Chez vous, partout et ailleurs</h2>
      </section>
    );
  } else if (props.origin === "about") {
    return <section className="banner_about"></section>;
  }
}

export default Banner;
