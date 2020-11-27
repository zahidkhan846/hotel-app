import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Logo/Logo.png";
import "./Navbar.css";
import { IoIosArrowDropdown } from "react-icons/io";

export default function NavBar() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo" src={Logo} atl="H2" />
          </Link>
          <button onClick={handleSideMenu} type="button" className="nav-btn">
            <IoIosArrowDropdown className="nav-icon"></IoIosArrowDropdown>
          </button>
        </div>
        <ul className={showSideMenu ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
