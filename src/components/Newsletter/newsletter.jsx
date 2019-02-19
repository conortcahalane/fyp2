import React, { Component } from "react";
import { withAuthorization } from "../Session";
import Counters from "./counters";
import NavBar from "../navbar";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
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
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
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

  handleDecrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    //find the index of the counter so it increments the correct one
    const index = counters.indexOf(counter);
    //clone counters to a new object as it is bad practice to override the state
    counters[index] = { ...counter };
    counters[index].value--;
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

  handleAddSection = () => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters++;
    this.setState({ counters });
  };

  increment() {
    this.setState(prevState => {
      return {
        counters: prevState.counters + 1
      };
    });
  }

  render() {
    console.log("App - Rendered");
    return (
      //need to add react.fragment because i am returning multiple route elements
      <React.Fragment>
        <Wrapper>
          <main className="container">
            <Title>Newsletter Creator</Title>
            <br />

            <label htmlFor="owner">Owner</label>
            <input type="text" name="owner" id="owner" />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description" />
            <Counters
              //properties of the prop object, can be called in child classes
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
            <div className="button-container" align="center" cellPadding="50px">
              <Button
                onClick={this.handleAddSection}
                className="btn btn-primary btn-sm"
              >
                Add Section
              </Button>
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
