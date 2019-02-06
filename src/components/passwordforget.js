import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withFirebase } from "./firebase";
import * as ROUTES from "../constants/routes";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
`;
const Text = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #af5a76;
`;

// Creates a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

const InsideWrapper = styled.section`
  padding: 1em;
  text-align: center;
  background: papayawhip;
`;

const Footer = styled.section`
  padding: 3.4em;
  text-align: center;
  background: palevioletred;
`;

const ButtonLink = styled(Link)`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid palevioletred;
  border-radius: 3px;
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

const PasswordForgetPage = () => (
  <div>
    <Wrapper>
      <Title>PasswordForget</Title>
      <InsideWrapper />
      <PasswordForgetForm />
    </Wrapper>
    <Wrapper />
    <Footer />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <Text>Forgotten Password?</Text>
        <Input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Button disabled={isInvalid} type="submit">
          Reset My Password
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <ButtonLink to={ROUTES.PASSWORD_FORGET}>Forgot Password?</ButtonLink>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
