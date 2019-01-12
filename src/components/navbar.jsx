import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";
import * as ROUTES from "../constants/routes";

//this is a stateless functional component, simple functionality

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <img src={require("./src/resources/IconSingleBlue.png")} /> */}
        </li>
        <li>
          <NavLink to={ROUTES.HOME}>Home</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ABOUT}>About Us</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.INSTRUCTIONS}>Instructions</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.NEWSLETTER}>Create Newsletter</NavLink>
        </li>
        {/* <li>
          <NavLink to={ROUTES.USER}>User</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

//totals the counters with states greater than zero
// totalCounters={this.state.counters.filter(c => c.value > 0).lenght}
//counters={this.state.counters}

//code that counts the amount of active counters
/* <span className="badge badge-pill badge-secondary">
            {this.props.counters.filter(c => c.value > 0).lenght}
          </span> */

export default NavBar;
