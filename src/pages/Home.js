import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Lodgment from "../components/Lodgment";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Lodgment />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
