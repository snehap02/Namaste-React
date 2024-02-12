import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={ LOGO_URL}
          alt=""
          className="logo"
        />
      </div>
      <div className="nav-links">
        <ul className="links">
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;