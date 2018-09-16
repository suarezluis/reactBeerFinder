import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper light-blue darken-3">
      <div className="container">
        <ul className="right">
          <li>
            <NavLink to="/reactBeerFinder/finder">Finder</NavLink>
          </li>
          <li>
            <NavLink to="/reactBeerFinder/Definitions">Definitions</NavLink>
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
