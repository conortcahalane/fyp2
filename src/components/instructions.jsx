//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application
//https://www.npmjs.com/package/react-router-dom --> used for routing throughout the application

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
              Here are detailed instructions on how to operate and use the
              Up2Date to streamline your newletter creation needs.
            </Text>
            <Text>
              Follow these simple steps and you will be able to craft incisive
              dynamic newsletters in no time.
            </Text>
          </InsideWrapper>
          <InsideWrapper>
            <hr color="#af5a76" />
            <Text>
              <b>
                <u>Step 1</u>:
              </b>
              The first thing that must be done when creating a new newsletter
              is that you must name and describe the newsletters purpose.
            </Text>
            <PicWrapper>
              <img
                src={require("../resources/instructions/NewsletterName.PNG")}
                alt="Logo"
                height="150"
                width="450"
              />
            </PicWrapper>
          </InsideWrapper>
          <InsideWrapper>
            <hr color="#af5a76" />
            <Text>
              <b>
                <u>Step 2</u>:
              </b>
              Initially there will be one new item displayed. These are news
              updates that will comprise your newsletter. They include a
              heading, body and option for a link to a website to be included.
              These are character locked to keep your items concise.
            </Text>
            <PicWrapper>
              <img
                src={require("../resources/instructions/NewsItem.PNG")}
                alt="Logo"
                height="170"
                width="1100"
              />
            </PicWrapper>
          </InsideWrapper>
          <InsideWrapper>
            <hr color="#af5a76" />
            <Text>
              <b>
                <u>Step 3</u>:
              </b>
              Above and below the news items there is an option to add an
              additional news item. This can be used to increase the amount of
              content in your newsletter. The amount of news items you wish to
              include is up to you.
            </Text>
            <PicWrapper>
              <img
                src={require("../resources/instructions/AddNewItem.PNG")}
                alt="Logo"
                height="100"
                width="200"
              />
            </PicWrapper>
          </InsideWrapper>
          <InsideWrapper>
            <hr color="#af5a76" />
            <Text>
              <b>
                <u>Step 4</u>:
              </b>
              At the right end of each news item is the option to delete that
              specific item. This will erase the content and remove that item.
            </Text>
            <PicWrapper>
              <img
                src={require("../resources/instructions/Delete.PNG")}
                alt="Logo"
                height="75"
                width="150"
              />
            </PicWrapper>
          </InsideWrapper>
          <InsideWrapper>
            <hr color="#af5a76" />
            <Text>
              <b>
                <u>Step 5</u>:
              </b>
              When finished adding content to your newsletter, enter your own
              email address into the text box at the bottom of the screen. This
              will enable Up2Date to email you a finished copy of your newletter
              for you to inspect and forward on to relevant contacts.
            </Text>
            <PicWrapper>
              <img
                src={require("../resources/instructions/Email.PNG")}
                alt="Logo"
                height="100"
                width="500"
              />
            </PicWrapper>
          </InsideWrapper>
          <InsideWrapper>
            <hr color="#af5a76" />
            <Text>
              <b>
                <u>Step 6</u>:
              </b>
              At the bottom of the screen there is a save and view button. This
              will save and store the your newletter and redirect you to a page
              where you can view your templated newsletter.
            </Text>
            <PicWrapper>
              <img
                src={require("../resources/instructions/Save.PNG")}
                alt="Logo"
                height="100"
                width="220"
              />
            </PicWrapper>
          </InsideWrapper>
          {/* <InsideWrapper>
            <Text>
              <b>
                <u>Step 7</u>:
              </b>
              At the bottom of the screen there is also a send button. Ensure
              that your newsletter is saved before clicking this button. This
              button will send your templated newsletter to the email address
              previously entered.
            </Text>
            <PicWrapper>
              <img
                src={require("../resources/instructions/Send.PNG")}
                alt="Logo"
                height="100"
                width="175"
              />
            </PicWrapper>
          </InsideWrapper> */}
          <InsideWrapper>
            <hr color="#af5a76" />
            <Text>
              <b>
                With these few steps you will be able to create quick, dynamic
                and concise newsletters on the fly and be able to keep everyone
                Up 2 Date!
              </b>
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
