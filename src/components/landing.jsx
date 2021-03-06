//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application
//https://www.npmjs.com/package/react-router-dom --> used for routing throughout the application

import React from "react";
import styled from "styled-components";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: #af5a76;
`;

const Text = styled.h3`
  font-size: 1.5em;
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
  padding: 2em;
  background: papayawhip;
`;

const InsideWrapper = styled.section`
  padding: 1em;
  text-align: center;
  background: papayawhip;
`;

const ButtonWrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

const Footer = styled.section`
  padding: 2.3em;
  text-align: center;
  background: palevioletred;
`;

const Button = styled(Link)`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1.5em;
  margin: 1.5em;
  padding: 0.5em 2em;
  border: 3px solid palevioletred;
  border-radius: 5px;
  :hover {
    color: #af5a76;
  }
`;

const Landing = () => {
  return (
    <div>
      <Wrapper>
        <InsideWrapper>
          <img
            src={require("../resources/IconSingleWhipL.png")}
            alt="Logo"
            height="122"
            width="122"
          />
        </InsideWrapper>
        <Title>Welcome to Up2Date</Title>
        <Text>The Dynamic internal newsletter creator for businesses.</Text>
        <ButtonWrapper>
          <Button to={ROUTES.SIGN_IN}>Sign In</Button>
          <Button to={ROUTES.SIGN_UP}>Sign Up</Button>
        </ButtonWrapper>
        {/* <img src={require("./resources/IconSingleBlue.jpg")} /> */}
      </Wrapper>
      <Footer>
        <FooterText>
          Developed by Conor Cahalane using React and Firebase
        </FooterText>
      </Footer>
    </div>
  );
};

export default Landing;
