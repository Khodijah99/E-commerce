import React from "react";
import Navbar from "../Components/Navbar";
import Store from "../Components/Store";
import Footer from "../Components/Footer";
function ProductsPage() {
  return (
    <div>
      <div className="top-nav">
        <h2 className="Store_header">
          Casual Out<span className="f_style">f</span>it
        </h2>
        <Navbar />
      </div>
      <Store />
      <Footer />
    </div>
  );
}

export default ProductsPage;
