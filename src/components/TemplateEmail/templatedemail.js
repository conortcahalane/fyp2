//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React, { Component } from "react";
import { withFirebase } from "../firebase";
import styled from "styled-components";

import { templateWithContent } from "./template";
import { allNewsHtml } from "./email";

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
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

const Footer = styled.section`
  padding: 3.4em;
  text-align: center;
  background: palevioletred;
`;

class TemplatedEmailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      newsletters: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    //We are using the newsletters reference from our Firebase class to attach a listener called on()
    //which riggers every time something has changed
    this.props.firebase.newsletters().on("value", snapshot => {
      const newslettersObject = snapshot.val();

      const newslettersList = Object.keys(newslettersObject).map(key => ({
        ...newslettersObject[key],
        uid: key
      }));

      this.setState({
        newsletters: newslettersList,
        loading: false
      });
    });

    // var ifr = document.createElement("iframe");
    // ifr.srcdoc = "<html><body><h1>hello!</h1></body></html>";
    // document.querySelectorAll("div")[0].append(ifr);
  }

  //remove the listener to avoid memory leaks from using the same reference with the off()
  componentWillUnmount() {
    this.props.firebase.newsletters().off();
  }

  render() {
    const { newsletters, loading } = this.state;

    return (
      <div>
        <Wrapper>
          <Title>Newsletter</Title>
          <hr color="#af5a76" width="50%" />
          {loading && <div>Loading ...</div>}
          {!loading && newsletters.length > 0 && (
            <NewsletterTemplate newsletters={newsletters} />
          )}
        </Wrapper>
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

const NewsletterTemplate = ({ newsletters }) => (
  <Wrapper>
    <Wrapper>
      <iframe
        id="iframe"
        width="600"
        height="1000"
        srcDoc={templateWithContent(
          allNewsHtml(newsletters[newsletters.length - 1].news),
          newsletters[newsletters.length - 1].name,
          newsletters[newsletters.length - 1].description,
          newsletters[newsletters.length - 1].email
        )}
      />
    </Wrapper>
  </Wrapper>
);

export default withFirebase(TemplatedEmailPage);
