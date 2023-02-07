import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Components.css";
function Navigation() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/"> Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
