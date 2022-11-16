import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutCollapse from "../components/Collapse/aboutCollapse.json";

function About() {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner origin="about" />
        <section className="dropdown">
          {aboutCollapse.map((text) => {
            console.log(text.title, text.id, text.description);
            <Collapse
              origin="about"
              title={text.title}
              id={text.id}
              description={text.description}
            />;
            console.log("toto");
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
