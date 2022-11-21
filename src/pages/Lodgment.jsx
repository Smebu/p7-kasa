import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "./Error";
import Slideshow from "../components/Gallery/Slideshow";
import Collapse from "../components/Collapse/Collapse";
import LodgmentHost from "../components/Lodgment/LodgmentHost";
import LodgmentRatings from "../components/Lodgment/LodgmentRatings";
import LodgmentTags from "../components/Lodgment/LodgmentTags";
import LodgmentTitle from "../components/Lodgment/LodgmentTitle";

function Lodgment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("../hotels.json").then((res) => setData(res.data));
  }, []);

  const lodgmentId = window.location.pathname.substring(10);
  const lodgment = data.find((item) => item.id === lodgmentId);
  if (!lodgment) return <Error />;

  return (
    <div className="lodgment">
      <Header />
      <main key={lodgment.id}>
        <Slideshow  pictures={lodgment.pictures} />
        <section className="lodgment_body">
          <div className="lodgment_wrapper">
            <div className="lodgment_info">
              <LodgmentTitle
                title={lodgment.title}
                location={lodgment.location}
              />
              <LodgmentTags tags={lodgment.tags} />
            </div>
            <div className="lodgment_host">
              <LodgmentHost host={lodgment.host} />
              <LodgmentRatings ratings={lodgment.rating} />
            </div>
          </div>
          <div className="lodgment_details">
            <Collapse
              title="Description"
              description={lodgment.description}
              class="dropdown_lodgment"
            ></Collapse>
            <Collapse
              title="Équipements"
              description={lodgment.equipments}
              class="dropdown_lodgment"
            ></Collapse>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Lodgment;
