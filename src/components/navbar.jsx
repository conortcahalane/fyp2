import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//this is a stateless functional component, simple functionality
class NavBar extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <Link to={"/App"}>Home</Link>
                </li>
                <li>
                  <Link to={"/newsletter.jsx"}>Newsletter</Link>
                </li>
                <li>
                  <Link to={"/instructions.jsx"}>Instructions</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Router>
    );
  }
}

//totals the counters with states greater than zero
// totalCounters={this.state.counters.filter(c => c.value > 0).lenght}
//counters={this.state.counters}

//code that counts the amount of active counters
/* <span className="badge badge-pill badge-secondary">
            {this.props.counters.filter(c => c.value > 0).lenght}
          </span> */

export default NavBar;
