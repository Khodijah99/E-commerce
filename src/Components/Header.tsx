import React from "react";
import logo from "../assets/logo.jpg";
function Header() {
  return (
    <div className="Header">
      <div className="Brand">
        <img src={logo} className="App_logo" alt="logo" />
        <h1 className="Brand_name"> Peek 'N' Drop </h1>
      </div>
    </div>
  );
}

export default Header;
