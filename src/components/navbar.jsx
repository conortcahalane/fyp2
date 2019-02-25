//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application
//https://www.npmjs.com/package/react-router-dom --> used for routing throughout the application

import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignOutButton from "./signout";
//import "./../App.css";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "./Session";
import styled, { css } from "styled-components";

const NavLink = styled(Link)`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0 1em;
  :hover {
    color: palevioletred;
    background: white;
  }
`;
const PicWrapper = styled.section`
  padding: 0.5em;
  text-align: right;
`;
const NavBar = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavBarAuth /> : <NavBarNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavBarAuth = () => (
  <div className="nav-ul">
    <li>
      <PicWrapper>
        <img
          src={require("../resources/IconSinglePaleL.png")}
          alt="Logo"
          height="42"
          width="42"
        />
      </PicWrapper>
    </li>

    {/* Enables routing to different pages of the application, Each is a button on the navbar */}

    <li>
      <NavLink to={ROUTES.HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.ABOUT}>About</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.INSTRUCTIONS}>Instructions</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.CREATOR}>Create Newsletter</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
    </li>
    <li>
      <SignOutButton />
    </li>
  </div>
);

const NavBarNonAuth = () => (
  <div className="nav-ul">
    <li>
      <PicWrapper>
        <img
          src={require("../resources/IconSinglePaleL.png")}
          alt="Logo"
          height="42"
          width="42"
        />
      </PicWrapper>
    </li>
    <li>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </div>
);

export default NavBar;
