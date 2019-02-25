//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React, { Component } from "react";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const NewsTitle = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
`;

const NewsText = styled.h3`
  font-size: 1em;
  text-align: left;
  color: palevioletred;
`;
const Text = styled.h1`
  font-size: 1.75em;
  text-align: left;
  color: #af5a76;
`;

const RedButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#ff4c4c" : "white")};
  color: ${props => (props.primary ? "white" : "#ff4c4c")};

  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1.7px solid #ff4c4c;
  border-radius: 3px;
`;

class Counter extends Component {
  // testing logs
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    //checks to see if the values are the same
    if (prevProps.counter.value !== this.props.counter.value) {
      //database call that would get new data from the server
    }
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <div>
          <Text>News Item {this.props.counter.id}</Text>
        </div>
        {/* <div className="col-1">
          {this.props.children}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div> */}
        <div className="col">
          {/* <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button> */}
          <div>
            <NewsText>Header:</NewsText>
            <input input="" value="" />

            <NewsText>Body:</NewsText>
            <textarea cols="40" rows="2" input="" value="" />
          </div>
          <RedButton onClick={() => this.props.onDelete(this.props.counter.id)}>
            Delete
          </RedButton>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
