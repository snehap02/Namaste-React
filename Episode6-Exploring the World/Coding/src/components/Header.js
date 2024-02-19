import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLoginToLogout] = useState("Login");

  useEffect(() => {
    setLoginToLogout("Login");
  }, []);
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
          <button className="login" onClick={
            () => {
              setLoginToLogout("LogOut");
            }
          }>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;