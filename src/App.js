//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application
//https://www.npmjs.com/package/react-router-dom --> used for routing throughout the application

import React from "react";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import each page
import Home from "./components/home";
import NotFound from "./components/404";
import About from "./components/about";
import Instructions from "./components/instructions";
import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import * as ROUTES from "./constants/routes";
import { withAuthentication } from "./components/Session";
import PasswordForgetPage from "./components/passwordforget";
import AccountPage from "./components/Account";
import AdminPage from "./components/Admin";
import Creator from "./components/Newsletter/creator";
import TemplatedEmailPage from "./components/TemplateEmail/templatedemail";

const App = () => (
  <React.Fragment>
    <Router>
      <div>
        <NavBar />
        {/* route to component mapping */}
        <Switch>
          <Route path={ROUTES.LANDING} component={Landing} exact />
          <Route path={ROUTES.SIGN_UP} component={Signup} />
          <Route path={ROUTES.SIGN_IN} component={Signin} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.INSTRUCTIONS} component={Instructions} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.CREATOR} component={Creator} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.TEMPLATEDEMAIL} component={TemplatedEmailPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);

export default withAuthentication(App);
