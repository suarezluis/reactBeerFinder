import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/finder">Finder</Link>
          </li>
          <li>
            <Link to="education">Education</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
