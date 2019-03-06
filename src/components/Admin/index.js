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
const SubTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Line = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 5px;
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

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      newsletters: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    //We are using the users reference from our Firebase class to attach a listener called on()
    //which riggers every time something has changed
    this.props.firebase.users().on("value", snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        users: usersList,
        loading: false
      });
    });
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
  }

  //remove the listener to avoid memory leaks from using the same reference with the off()
  componentWillUnmount() {
    this.props.firebase.users().off();

    this.props.firebase.newsletters().off();
  }

  render() {
    const { newsletters, users, loading } = this.state;

    return (
      <div>
        <Wrapper>
          <Title>Admin</Title>

          {loading && <div>Loading ...</div>}

          <UserList users={users} />
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

const UserList = ({ users }) => (
  <Wrapper>
    <Line />
    <SubTitle>User Data</SubTitle>
    <Wrapper>
      {users.map(user => (
        <li key={user.uid}>
          <span>
            <strong>ID:</strong> {user.uid}
          </span>
          <span> -- </span>
          <span>
            <strong>E-Mail:</strong> {user.email}
          </span>
          <span> -- </span>
          <span>
            <strong>Username:</strong> {user.username}
          </span>
        </li>
      ))}
    </Wrapper>
  </Wrapper>
);

const NewsletterList = ({ newsletters }) => (
  <Wrapper>
    <Line />
    <SubTitle>Newsletter Data</SubTitle>
    <Wrapper>
      {newsletters.map(newsletter => (
        <li key={newsletter.uid}>
          <span>
            <strong>ID:</strong> {newsletter.uid}
          </span>
          <span> -- </span>
          <span>
            <strong>Name:</strong> {newsletter.name}
          </span>
          <span> -- </span>
          <span>
            <strong>Description</strong> {newsletter.description}
          </span>
          <span> -- </span>
          <span>
            <strong>News Items</strong> {newsletter.news.body}
          </span>
          <span> -- </span>
          <span>
            <strong>E-Mail:</strong> {newsletter.email}
          </span>
        </li>
      ))}
    </Wrapper>
  </Wrapper>
);

export default withFirebase(AdminPage);
