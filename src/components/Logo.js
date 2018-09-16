import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <nav className="nav-wrapper light-blue darken-4">
      <Link to="/reactBeerFinder/" className="brand-logo center">
        Beer Connoisseur
      </Link>
    </nav>
  );
};

export default Logo;
