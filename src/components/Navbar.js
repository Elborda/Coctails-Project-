import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav--container">
      <Link className="link-img" to="/">
        <img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"></img>
      </Link>
      <div>
        <ul>
          <li className="list">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="list">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
