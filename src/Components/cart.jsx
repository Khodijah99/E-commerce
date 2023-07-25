import React, { useContext } from "react";
import { PRODUCTS } from "./Products";
import { ShopContext } from "../Context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { NavLink } from "react-router-dom";
function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="Cart">
      <h1>Your Cart Items</h1>

      <div className="cartItems">
        {PRODUCTS.map((Casualwears) => {
          if (cartItems[Casualwears.id] !== 0) {
            return <CartItem data={Casualwears} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <div className="Subtotal">
            <p>Subtotal: $ {totalAmount}</p>
          </div>

          <NavLink to="/products" className="ShoppingLink">
            <div className="">
              <button className="Continue">Continue Shopping</button>
            </div>
          </NavLink>
          <NavLink to="/" className="ShoppingLink">
            <div className="">
              <button className="Checkout">Check Out</button>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className="Empty_Alert">
          <h2>Your Cart is Empty</h2>
        </div>
      )}
    </div>
  );
}
export default Cart;
