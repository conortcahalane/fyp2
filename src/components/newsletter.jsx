import React, { Component } from "react";
import Counters from "./counters";
// import {
//   Router,
//   Route,
//   Link,
//   IndexRoute,
//   hashHistory,
//   browserHistory
// } from "react-router";
import NavBar from "./navbar";

class Newsletter extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  componentDidMount() {
    // can be used for database calls
    //this.setState({draftinfo...})
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    //find the index of the counter so it increments the correct one
    const index = counters.indexOf(counter);
    //clone counters to a new object as it is bad practice to override the state
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[0]);
    //update the state
    this.setState({ counters });
  };

  handleReset = () => {
    //stores a new (reset) array of counters
    //use map to target  counters
    const counters = this.state.counters.map(c => {
      // reset each value to zero
      c.value = 0;
      return c;
    });
    //calls the setState containing the new array
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      //need to add react.fragment because i am returning multiple route elements
      <React.Fragment>
        <main className="container">
          <Counters
            //properties of the prop object, can be called in child classes
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
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
