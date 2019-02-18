import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "./firebase";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
`;

// Creates a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 2.5em;
  text-align: center;
  background: papayawhip;
`;

const InsideWrapper = styled.section`
  padding: 0.5em;
  text-align: center;
  background: papayawhip;
`;

const Footer = styled.section`
  padding: 1em;
  text-align: center;
  background: palevioletred;
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  :hover {
    color: #af5a76;
  }
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

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border: none;
  border-radius: 3px;
`;

const SignUpPage = () => (
  <div>
    <Wrapper>
      <Title>SignUp</Title>
      <InsideWrapper />
      <SignUpForm />
    </Wrapper>
    <Footer />
  </div>
);

//This way, we can use the initial state object to reset the state after a successful sign up.
const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <InsideWrapper>
            <Input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
          </InsideWrapper>
        </div>
        <div>
          <InsideWrapper>
            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
          </InsideWrapper>
        </div>
        <div>
          <InsideWrapper>
            <Input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </InsideWrapper>
        </div>
        <div>
          <InsideWrapper>
            <Input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
          </InsideWrapper>
        </div>
        <div>
          <Button disabled={isInvalid} type="submit">
            Sign Up
          </Button>
        </div>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <StyledLink to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
