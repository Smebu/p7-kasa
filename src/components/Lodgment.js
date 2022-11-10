import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Lodgment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("./hotels.json").then((res) => setData(res.data));
  }, []);

  return (
    <section className="cards">
      {data.map((lodgment) => (
        <NavLink to={`/lodgment/${lodgment.id}`} key={lodgment.id}>
          <article className="card_thumb">
            <img
              src={lodgment.cover}
              alt={lodgment.title}
              className="card_img"
            ></img>
            <p className="card_text">{lodgment.title}</p>
          </article>
        </NavLink>
      ))}
    </section>
  );
}

export default Lodgment;
