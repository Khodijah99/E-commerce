import React, { useContext } from "react";
import { ShopContext } from "../Context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const Casual = (props: { data: { id: any; productName: any; productPrice: any; productImage: any; }; }) => {
  const { id, productName, productPrice, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="Product_Card">
      <img src={'assets/'+productImage+'.jpg'} alt="ProductImage" className="Product_Image" />
      <br />
      <div className="Product_Description">
        <p>Name: {productName}</p>
        <p>Price: ${productPrice}</p>
        <button className="AddtoCart" onClick={() => addToCart(id)}>
          <div className="">Add to Cart</div>{" "}
          {cartItemAmount > 0 && (
            <span className="Cart_Item_Amount">{cartItemAmount}</span>
          )}
          <FontAwesomeIcon icon={faCartShopping} className="CartIcon" />
        </button>
      </div>
    </div>
  );
};
