import React, { Component } from "react";
import { withAuthorization } from "./Session";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
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

const Footer = styled.section`
  padding: 2.5em;
  text-align: center;
  background: palevioletred;
`;

class Instructions extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Title>The Instructions Page</Title>
          <InsideWrapper>
            <Text>
              Here will be a detailed description of how to operate and use the
              web application.
            </Text>
          </InsideWrapper>
          <InsideWrapper>
            <Text>
              This will include images and text to guide the user through the
              newsletter creation process.
            </Text>
          </InsideWrapper>
        </Wrapper>
        <Wrapper />
        <Wrapper />
        <Footer>
          <FooterText>
            Developed by Conor Cahalane using React and Firebase
          </FooterText>
        </Footer>
      </div>
    );
  }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Instructions);
