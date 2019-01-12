import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
//import each page
import Home from "./components/home";
import NotFound from "./components/404";
import About from "./components/about";
import User from "./components/user";
import Instructions from "./components/instructions";
import Newsletter from "./components/newsletter";
import Landing from "./components/landing";
import Signin from "./components/signin";
import Signup from "./components/signup";
import * as ROUTES from "./constants/routes";

class App extends Component {
  render() {
    console.log("App - Rendered");
    return (
      //need to add react.fragment because i am returning multiple route elements
      <React.Fragment>
        <BrowserRouter>
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
              <Route path={ROUTES.USER} component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
