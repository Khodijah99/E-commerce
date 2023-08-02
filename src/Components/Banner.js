import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import banner from "../assets/banner_2.png";
function Banner() {
  return (
    <div className="Banner">
      <img src={banner} className="Brand_banner" alt="banner" />
      <div className="Banner_tag">
        <h2>Bringing Fashion Back !</h2>
        <br />
        <Link to="#New_collection">
          <button className="New_button">New Collection</button>{" "}
        </Link>
      </div>
    </div>
  );
}
export default Banner;
