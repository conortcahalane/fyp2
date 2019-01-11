import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //confirmation
    console.log("Counters - Rendered");
    //cleans up code by removing the this.props repitition
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <h3>Newsletter Creator</h3>
        <br />
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            //doesn't get handled here... bubbles it up to the parent component
            onDelete={onDelete}
            onIncrement={onIncrement}
            //holds all the contents of counter
            counter={counter}
          >
            <h4>News Section {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
