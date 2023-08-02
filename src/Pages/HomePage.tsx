import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Welcome from "../Components/Welcome";
import Collection from "../Components/Collection";
import Footer from "../Components/Footer";
function HomePage() {
  return (
    <div>
      <div className="top-nav">
        <Header />
        <Navbar />
      </div>
      <Banner />
      <Welcome />
      <Collection />
      <Footer />
    </div>
  );
}

export default HomePage;
