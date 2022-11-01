import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navigation">
        <div className="nav_logo">
          <NavLink to="/">
            <img src="./LOGO.png" alt="logo kasa" />
          </NavLink>
        </div>
        <ul className="nav_link">
          <NavLink to="/" className="nav_link_accueil">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/apropos" className="nav_link_apropos">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
