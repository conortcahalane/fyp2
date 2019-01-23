import React, { Component } from "react";
import { withAuthorization } from "./Session";
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
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
`;
const Header = styled.h1`
  font-size: 1.25em;
  text-align: center;
  color: #017cff;
`;
const Text = styled.h3`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;

const FooterText = styled.h3`
  font-size: 0.75em;
  text-align: center;
  color: papayawhip;
`;

// Creates a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 3em;
  background: papayawhip;
`;

const InsideWrapper = styled.section`
  padding: 1em;
  text-align: center;
  background: papayawhip;
`;
const PicWrapper = styled.section`
  padding: 0.5em;
  text-align: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid palevioletred;
  border-radius: 3px;
`;
const Footer = styled.section`
  padding: 2.5em;
  text-align: center;
  background: palevioletred;
`;

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
        <Wrapper>
          <main className="container">
            <Counters
              //properties of the prop object, can be called in child classes
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
            <div className="button-container" align="center" cellPadding="50px">
              <Button className="btn btn-primary btn-sm">Add Section</Button>
              <Button className="btn btn-success btn-sm">
                Save Newsletter
              </Button>
              <Button className="btn btn-warning btn-sm">Send</Button>
            </div>
          </main>
        </Wrapper>
        <Footer>
          <FooterText>
            Developed by Conor Cahalane using React and Firebase
          </FooterText>
        </Footer>
      </React.Fragment>
    );
  }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Newsletter);
