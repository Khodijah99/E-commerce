import React from "react";
import {Link} from "react-router-dom";
function Banner() {
  return (
    <div className="Banner">
      <img src={'assets/banner_2.png'} className="Brand_banner" alt="banner" />
      <div className="Banner_tag">
        <h2>Bringing Fashion Back !</h2>
        <br />
        <a href="#New_collection">
          <button className="New_button">New Collection</button>{" "}
        </a>
      </div>
    </div>
  );
}
export default Banner;
