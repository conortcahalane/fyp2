import React, { Component } from "react";
import Counters from "./components/counters";
// import {
//   Router,
//   Route,
//   Link,
//   IndexRoute,
//   hashHistory,
//   browserHistory
// } from "react-router";
import NavBar from "./components/navbar";

class Newsletter extends Component {
  render() {
    console.log("App - Rendered");
    return (
      //need to add react.fragment because i am returning multiple route elements
      <React.Fragment>
        <main className="container">
          <Counters
            //properties of the prop object, can be called in child classes
            counters={this.props.counters}
            onReset={this.props.handleReset}
            onIncrement={this.props.handleIncrement}
            onDelete={this.props.handleDelete}
          />
          <div className="button-container" align="center" cellpadding="50px">
            <button className="btn btn-primary btn-sm">Add Section</button>
            <button className="btn btn-success btn-sm">Save Newsletter</button>
            <button className="btn btn-warning btn-sm">Send</button>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Newsletter;
