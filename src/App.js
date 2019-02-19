import React from "react";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import each page
import Home from "./components/home";
import NotFound from "./components/404";
import About from "./components/about";
import Instructions from "./components/instructions";
import Newsletter from "./components/Newsletter/newsletter";
import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import * as ROUTES from "./constants/routes";
import { withAuthentication } from "./components/Session";
import PasswordForgetPage from "./components/passwordforget";
import AccountPage from "./components/Account";
import AdminPage from "./components/Admin";
import Creator from "./components/Newsletter/creator";

//import "./App.css";

const App = () => (
  <React.Fragment>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path={ROUTES.LANDING} component={Landing} exact />
          <Route path={ROUTES.SIGN_UP} component={Signup} />
          <Route path={ROUTES.SIGN_IN} component={Signin} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.INSTRUCTIONS} component={Instructions} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.NEWSLETTER} component={Newsletter} />
          <Route path={ROUTES.CREATOR} component={Creator} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);

export default withAuthentication(App);
