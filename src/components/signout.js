import React from "react";
import { withFirebase } from "./firebase";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1.5px solid palevioletred;
  border-radius: 3px;
`;

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
