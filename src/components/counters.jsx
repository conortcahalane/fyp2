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
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="btn btn-primary btn-sm m-2">hello</div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            //doesn't get handled here... bubbles it up to the parent component
            onDelete={onDelete}
            onIncrement={onIncrement}
            //holds all the contents of counter
            counter={counter}
          >
            <h4>News Item #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
