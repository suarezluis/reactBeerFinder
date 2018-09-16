import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li>
            <NavLink to="/reactBeerFinder/finder">Finder</NavLink>
          </li>
          <li>
            <NavLink to="/reactBeerFinder/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/reactBeerFinder/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
