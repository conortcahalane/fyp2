import React from "react";
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

const Footer = styled.section`
  padding: 2.5em;
  text-align: center;
  background: palevioletred;
`;

const About = () => {
  return (
    <div>
      <Wrapper>
        <Title>About Up2Date</Title>
        <InsideWrapper>
          <Text>Developed with such technologies as</Text>
          <InsideWrapper />

          <PicWrapper>
            <img
              src={require("../resources/about/node.png")}
              alt="Logo"
              height="100"
              width="180"
            />
          </PicWrapper>
          <Text>
            Node.js is an open-source, cross-platform JavaScript run-time
            environment that executes JavaScript code outside of a browser.
            Node.js is widely accepted by multinational companies such as
            Groupon, IBM, LinkedIn, Microsoft.
          </Text>
        </InsideWrapper>
        <InsideWrapper>
          <PicWrapper>
            <img
              src={require("../resources/about/react.png")}
              alt="Logo"
              height="80"
              width="250"
            />
          </PicWrapper>
          <Text>
            React is a JavaScript library for building user interfaces. It is
            maintained by Facebook and a community of individual developers and
            companies. React can be used as a base in the development of
            single-page applications. Single-page applications are apps that
            only need to load the JavaScript used in the project the first time
            that it appears onscreen. That means that if the JavaScript is
            revisited, it will appear instantly as it doesn’t need to be loaded
            again.
          </Text>
        </InsideWrapper>
        <InsideWrapper>
          <PicWrapper>
            <img
              src={require("../resources/about/firebase.png")}
              alt="Logo"
              height="80"
              width="280"
            />
          </PicWrapper>
          <Text>
            Firebase is built on Google infrastructure and scales automatically,
            for even the largest apps. Firebase gives you functionality like
            analytics, databases, messaging and crash reporting so you can move
            quickly and focus on your users.
          </Text>
        </InsideWrapper>
        <InsideWrapper>
          <Header>Visual Studio Code</Header>
          <PicWrapper>
            <img
              src={require("../resources/about/vscode.png")}
              alt="Logo"
              height="80"
              width="80"
            />
          </PicWrapper>
          <Text>
            Visual Studio Code is a source code editor developed by Microsoft
            for Windows. It includes support for debugging, embedded Git
            control, syntax highlighting, intelligent code completion, snippets,
            and code refactoring. These features and more make coding with
            VsCode more efficient and more reliable.
          </Text>
        </InsideWrapper>
        <InsideWrapper>
          <PicWrapper>
            <img
              src={require("../resources/about/html.png")}
              alt="Logo"
              height="100"
              width="100"
            />
          </PicWrapper>
          <Text>
            Hypertext Markup Language is the standard markup language for
            creating web pages and web applications. This along with JavaScript
            and CSS will make up the web application of the project.
          </Text>
        </InsideWrapper>
      </Wrapper>
      <Footer>
        <FooterText>
          Developed by Conor Cahalane using React and Firebase
        </FooterText>
      </Footer>
    </div>
  );
};

export default About;
