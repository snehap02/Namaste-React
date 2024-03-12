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
    <div className="header flex justify-between">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo w-16" />
      </div>
      <div className="nav-links">
        <ul className="links flex gap-4 leading-[3rem] md:leading-[3rem] font-medium md:gap-8 text-xs md:text-base">
          <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
