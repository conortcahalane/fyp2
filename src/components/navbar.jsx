import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOutButton from "./signout";
import "./../App.css";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "./Session";

const NavBar = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavBarAuth /> : <NavBarNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavBarAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ABOUT}>About</Link>
    </li>
    <li>
      <Link to={ROUTES.INSTRUCTIONS}>Instructions</Link>
    </li>
    <li>
      <Link to={ROUTES.NEWSLETTER}>Create Newsletter</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavBarNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
//this is a stateless functional component, simple functionality
// const NavBar = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           {/* <img src={require("./src/resources/IconSingleBlue.png")} /> */}
//         </li>
//         <li>
//           <NavLink to={ROUTES.HOME}>Home</NavLink>
//         </li>
//         <li>
//           <NavLink to={ROUTES.ABOUT}>About Us</NavLink>
//         </li>
//         <li>
//           <NavLink to={ROUTES.INSTRUCTIONS}>Instructions</NavLink>
//         </li>
//         <li>
//           <NavLink to={ROUTES.NEWSLETTER}>Create Newsletter</NavLink>
//         </li>
//         <li>
//           <SignOutButton />
//         </li>
//         {/* <li>
//           <NavLink to={ROUTES.USER}>User</NavLink>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

//totals the counters with states greater than zero
// totalCounters={this.state.counters.filter(c => c.value > 0).lenght}
//counters={this.state.counters}

//code that counts the amount of active counters
/* <span className="badge badge-pill badge-secondary">
            {this.props.counters.filter(c => c.value > 0).lenght}
          </span> */

export default NavBar;
