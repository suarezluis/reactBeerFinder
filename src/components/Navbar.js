import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li>
            <NavLink to="/finder">Finder</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
