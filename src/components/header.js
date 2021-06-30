import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Header = () => (
  <header className="header">
    <div className="content-container">

      <div className="header__content">
        <h3>Portfolio.</h3>
        <div className="links">

        <NavLink activeStyle={{ color: "#d3d3d3" }} className="header__title" to="/" exact={true}>
          <h3>Home</h3>
        </NavLink>
        <NavLink activeStyle={{ color: "#d3d3d3" }} activeClassName="active" className="header__title" to="/aboutus">
          <h3>About</h3>
        </NavLink>
        <NavLink activeStyle={{ color: "#d3d3d3" }} activeClassName="active" className="header__title" to="/contactus">
          <h3>Contact</h3>
        </NavLink>
        </div>
      </div>
    </div>
  </header>
);
export default Header;