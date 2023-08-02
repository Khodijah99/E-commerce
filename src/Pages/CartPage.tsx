import React from "react";
import Navbar from "../Components/Navbar";
import Cart from "../Components/cart";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
function CartPage() {
  return (
    <div>
      <div className="top-nav">
        <Header />
        <Navbar />
      </div>
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage;
