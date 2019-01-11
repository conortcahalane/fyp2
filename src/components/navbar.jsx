import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";

//this is a stateless functional component, simple functionality

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* <img src={require("./src/resources/IconSingleBlue.png")} /> */}
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/instructions">Instructions</NavLink>
        </li>
        <li>
          <NavLink to="/newsletter">Create Newsletter</NavLink>
        </li>
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
