import React, { useContext } from "react";
import { ShopContext } from "../Context/shop-context";

export const CartItem = (props) => {
  const { id, productName, productPrice, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartValue } =
    useContext(ShopContext);
  return (
    <div className="Cart_Item">
      <div className="Cart_Product">
        <div>
          <img src={productImage} alt="ProductImage" className="Cart_Image" />
        </div>
        <div className="Cart_Description">
          <p> Name: {productName} </p>
          <p> Price: $ {productPrice} </p>

          <div className="CountHandler">
            <button className="cntrlbtn" onClick={() => removeFromCart(id)}>
              {" "}
              -{" "}
            </button>
            <input
              type="text"
              value={cartItems[id]}
              onChange={(e) => updateCartValue(Number(e.target.value), id)}
            />
            <button className="cntrlbtn" onClick={() => addToCart(id)}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
