//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React, { Component } from "react";
import Counter from "./counter";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles

class Counters extends Component {
  render() {
    //confirmation
    console.log("Counters - Rendered");
    //cleans up code by removing the this.props repitition
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            //doesn't get handled here... bubbles it up to the parent component
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            //holds all the contents of counter
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
