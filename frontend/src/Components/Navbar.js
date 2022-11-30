import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Directory App
        </a>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;