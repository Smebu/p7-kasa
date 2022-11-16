import React from "react";
import Collapse from "../components/Collapse/Collapse";
import Header from "../components/Header";
import axios from "axios";
import Error from "../pages/Error";
import Footer from "../components/Footer";
import LodgmentTitle from "../components/Lodgment/LodgmentTitle";
import LodgmentTags from "../components/Lodgment/LodgmentTags";
import LodgmentRatings from "../components/Lodgment/LodgmentRatings";
import LodgmentHost from "../components/Lodgment/LodgmentHost";

function Lodgment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("./hotels.json").then((res) => setData(res.data));
  }, []);

  const lodgmentId = window.location.pathname.substring(10);
  const lodgment = data.find((item) => item.id === lodgmentId);
  const lodgmentUnique = data.filter((elem) => elem.id === lodgmentId);

  if (!lodgment) return <Error />;

  return (
    <div className="lodgment">
      <Header />
      {lodgmentUnique.map((el) => {
        <main key={el.id}>
          <section className="gallery"></section>
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
                <LodgmentRatings ratings={lodgment.rating} />
                <LodgmentHost host={lodgment.host} />
              </div>
            </div>
            <div className="lodgment_details">
              <Collapse
                origin="card"
                title="Équipements"
                content={lodgment.equipments}
              ></Collapse>
              <Collapse
                origin="card"
                title="Description"
                content={lodgment.description}
              ></Collapse>
            </div>
          </section>
        </main>;
      })}
      <Footer />
    </div>
  );
}

export default Lodgment;
