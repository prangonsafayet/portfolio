import React from "react";
import logo from "../logo.png";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-bg-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#fff" }}
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-center text-lg-left">
            <li className="nav-item">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutme" exact>
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" exact>
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" exact>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
