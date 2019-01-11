import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
//import each page
import Home from "./components/home";
import NotFound from "./components/404";
import About from "./components/about";
import Instructions from "./components/instructions";
import Newsletter from "./components/newsletter";

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
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/instructions" component={Instructions} />
              <Route path="/home" component={Home} />
              <Route path="/newsletter" component={Newsletter} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
