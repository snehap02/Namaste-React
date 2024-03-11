import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";

const Header = () => {
  const [login, setLoginToLogout] = useState("Login");
  // console.log(useState())
  const isOnline = useOnlineOfflineStatus();

  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="nav-links">
        <ul className="links">
        <li>
          Online Status: {isOnline ? "🟢" : "🔴"}
        </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              login === "Login"
                ? setLoginToLogout("Logout")
                : setLoginToLogout("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
