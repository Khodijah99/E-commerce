import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <ul className="Navigation_bar">
      <li className="Navlist">
        <NavLink to="/" className="Nav">
          Home
        </NavLink>
      </li>
      <li className="Navlist">
        <NavLink to="/about" className="Nav">
          About
        </NavLink>
      </li>
      <li className="Navlist">
        <NavLink to="/products" className="Nav">
          Products
        </NavLink>
      </li>
      <li className="Navlist">
        <NavLink to="/contact" className="Nav">
          Contact
        </NavLink>
      </li>
      <li className="CartSection">
        <NavLink to="/cart" className="CartIcon">
          <input className="CartQty"></input>
          <br />
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
