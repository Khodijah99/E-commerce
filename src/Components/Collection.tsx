import React from "react";
import { NavLink } from "react-router-dom";
import casual from "../assets/casual.jpg";
function Collection() {
  return (
    <div className="New_collection" id="New_collection">
      <h1> New Collection</h1>

      <div className="Collection">
        <div className="Cards">
          <img src={casual} className="Outfit" alt="Outfit" />
          <NavLink to="/products" className="Collection_Nav">
            {" "}
            <div className="Label">
              {" "}
              <p>Casual Wears </p>{" "}
            </div>{" "}
          </NavLink>
        </div>
        <div className="Cards">
          <img src={casual} className="Outfit" alt="Outfit" />
          <NavLink to="/products" className="Collection_Nav">
            {" "}
            <div className="Label">
              {" "}
              <p>Office Wears </p>
            </div>{" "}
          </NavLink>
        </div>
        <div className="Cards">
          <img src={casual} className="Outfit" alt="Outfit" />
          <NavLink to="/products" className="Collection_Nav">
            {" "}
            <div className="Label">
              <p>Party Wears </p>{" "}
            </div>{" "}
          </NavLink>
        </div>
        <div className="Cards">
          <img src={casual} className="Outfit" alt="Outfit" />
          <NavLink to="/products" className="Collection_Nav">
            {" "}
            <div className="Label">
              {" "}
              <p>Night Wears </p>{" "}
            </div>{" "}
          </NavLink>
        </div>
        <div className="Cards">
          <img src={casual} className="Outfit" alt="Outfit" />
          <NavLink to="/products" className="Collection_Nav">
            {" "}
            <div className="Label">
              {" "}
              <p> Foot Wears </p>{" "}
            </div>{" "}
          </NavLink>
        </div>
        <div className="Cards">
          <img src={casual} className="Outfit" alt="Outfit" />
          <NavLink to="/products" className="Collection_Nav">
            {" "}
            <div className="Label">
              {" "}
              <p> Purses and Bags</p>{" "}
            </div>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Collection;
