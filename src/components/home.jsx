import React from "react";
import { withAuthorization } from "./Session";
import styled from "styled-components";

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
const SmallText = styled.h3`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
  padding-top: 3em;
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
const ButtonWrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

const Footer = styled.section`
  padding: 2.5em;
  text-align: center;
  background: palevioletred;
`;

const Button = styled.button`
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

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Title>Up2Date Homepage</Title>
        <InsideWrapper />
        <Text>The Dynamic internal newsletter creator for business'.</Text>
        <InsideWrapper />
        <InsideWrapper>
          <img
            src={require("../resources/IconSingleWhipL.png")}
            alt="Logo"
            height="122"
            width="122"
          />
        </InsideWrapper>
        <SmallText>
          <b>
            Create quick, dynamic and concise newsletters on the fly and be able
            to keep everyone Up 2 Date!
          </b>
        </SmallText>
      </Wrapper>
      <Footer>
        <FooterText>
          Developed by Conor Cahalane using React and Firebase
        </FooterText>
      </Footer>
    </div>
  );
};
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);
