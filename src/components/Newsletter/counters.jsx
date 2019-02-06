import React, { Component } from "react";
import Counter from "./counter";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
`;

const Text = styled.h3`
  font-size: 2em;
  text-align: left;
  color: palevioletred;
`;

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
        <Title>Newsletter Creator</Title>
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
            onDecrement={onDecrement}
            //holds all the contents of counter
            counter={counter}
          >
            <Text>News Section {counter.id}</Text>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
