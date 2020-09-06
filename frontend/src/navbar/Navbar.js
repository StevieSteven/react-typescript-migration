import React from "react";
import {Link} from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
      <div className="navbar">
        <span className="navbar-link">
          <Link to="/">Zur Startseite</Link>
        </span>
        <span className="navbar-heading">React Typescript Migration Example</span>
      </div>
  )
}
