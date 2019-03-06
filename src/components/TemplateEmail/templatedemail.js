//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React, { Component } from "react";
import { withFirebase } from "../firebase";
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
    var s = document.getElementById("newsletter");
    // s.contentDocument.write("templatedemail.html");
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

          {loading && <div>Loading ...</div>}

          <NewsletterList newsletters={newsletters} />
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

const NewsletterList = ({ newsletters }) => (
  <Wrapper>
    <Wrapper>
      <iframe id="newsletter" width="1000" height="5000" />
    </Wrapper>
  </Wrapper>
);

export default withFirebase(TemplatedEmailPage);
