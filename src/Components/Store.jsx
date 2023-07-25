import React from "react";
import { Casual } from "./Casualwears";
import { PRODUCTS } from "./Products";
import "./Store.css";

function Store() {
  return (
    <div className="Store">
      <div className="Causal_Products">
        {PRODUCTS.map((Casualwears) => (
          <Casual data={Casualwears} />
        ))}
      </div>
    </div>
  );
}
export default Store;
