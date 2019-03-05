//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React from "react";
import styled from "styled-components";
import { compose } from "recompose";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../firebase";
import * as ROUTES from "../../constants/routes";
import "../../App.css";
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
  padding: 3em;
  background: papayawhip;
`;

const CenterDiv = styled.div`
  padding-top: 1em;
  text-align: center;
  background: papayawhip;
`;

// Create a Title component that'll render an <h1> tag with some styles
const NewsTitle = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #af5a76;
`;

const NewsText = styled.h3`
  font-size: 1em;
  text-align: left;
  color: palevioletred;
`;
const Heading = styled.label`
  font-size: 1.75em;
  text-align: left;
  color: #af5a76;
  padding-right: 0.5em;
`;
const Heading2 = styled.label`
  font-size: 1.4em;
  text-align: left;
  color: palevioletred;
  padding: 0.5em;
`;
const PinkButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid palevioletred;
  border-radius: 3px;
`;
const GreenButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#699864" : "white")};
  color: ${props => (props.primary ? "white" : "#699864	")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid #699864;
  border-radius: 3px;
`;
const BlueButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#027AF9" : "white")};
  color: ${props => (props.primary ? "white" : "#027AF9	")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid #027af9;
  border-radius: 3px;
`;
const YellowButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#F9C802" : "white")};
  color: ${props => (props.primary ? "white" : "#F9C802	")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid #f9c802;
  border-radius: 3px;
`;
const RedButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#ff4c4c" : "white")};
  color: ${props => (props.primary ? "white" : "#ff4c4c")};

  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1.7px solid #ff4c4c;
  border-radius: 3px;
`;

const Footer = styled.section`
  padding: 2.5em;
  text-align: center;
  background: palevioletred;
`;

const CreatorPage = () => (
  <div>
    <Wrapper>
      <CreatorForm />
    </Wrapper>
    <Footer>
      <FooterText>
        Developed by Conor Cahalane using React and Firebase
      </FooterText>
    </Footer>
  </div>
);

const INITIAL_STATE = {
  news: [{ heading: "", body: "", link: "" }],
  name: "",
  description: "",
  email: ""
};

class CreatorFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = e => {
    if (["heading", "body", "link"].includes(e.target.className)) {
      let news = [...this.state.news];
      news[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ news }, () => console.log(this.state.news));
    } else {
      this.setState({ [e.target.heading]: e.target.value });
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  onSubmit = event => {
    const { news, name, description, email } = this.state;

    this.props.firebase
      .doCreateNewsletter(news, name, description, email)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).newsletter.set({
          news,
          name,
          description,
          email
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        console.log(this.state);
      })
      .catch(error => {
        //error handling
        this.setState({ error });
      });

    event.preventDefault();
  };

  addNewsItem = e => {
    this.setState(prevState => ({
      news: [...prevState.news, { heading: "", body: "", Link: "" }]
    }));
  };

  removeClick(i) {
    let news = [...this.state.news];
    news.splice(i, 1);
    this.setState({ news });
  }

  validate(name, description, news, email) {
    // true means invalid, so our conditions got reversed
    return {
      name: name.length === 0,
      description: description.length === 0,
      news: news.length === 0,
      email: email.length === 0
    };
  }

  render() {
    let { name, description, news, email } = this.state;
    const errors = this.validate(name, description, news, email);
    const isEnabled = !Object.keys(errors).some(x => errors[x]);
    // const isEnabled =
    //   email.length > 0 &&
    //   name.length > 0 &&
    //   news.length > 0 &&
    //   description.length > 0;
    return (
      <form onSubmit={this.handleSubmit}>
        <Wrapper>
          <NewsTitle>Newsletter Creator</NewsTitle>
          <br />
          <CenterDiv>
            <Heading htmlFor="name">Newsletter Title:</Heading>
            <input
              type="text"
              className={errors.name ? "error" : ""}
              name="name"
              id="name"
              onChange={this.onChange}
              value={name}
            />
          </CenterDiv>
          <CenterDiv>
            <Heading2 htmlFor="description">Description</Heading2>
            <input
              type="text"
              className={errors.description ? "error" : ""}
              name="description"
              id="description"
              onChange={this.onChange}
              value={description}
            />
          </CenterDiv>
          <GreenButton onClick={this.addNewsItem}>Add News Item</GreenButton>
          {news.map((val, idx) => {
            let headingId = `heading-${idx}`,
              bodyId = `body-${idx}`,
              linkId = `link-${idx}`;
            return (
              <div key={idx}>
                <div key={idx}>
                  <Heading htmlFor={headingId}>{`News Item #${idx +
                    1}`}</Heading>
                </div>
                <Heading2 htmlFor={headingId}>Heading:</Heading2>
                <input
                  type="text"
                  name={headingId}
                  data-id={idx}
                  id={headingId}
                  value={news[idx].heading}
                  onChange={this.handleChange}
                  className="heading"
                />
                <Heading2 htmlFor={bodyId}>Body:</Heading2>

                <textarea
                  cols="40"
                  rows="2"
                  type="text"
                  name={bodyId}
                  data-id={idx}
                  id={bodyId}
                  onChange={this.handleChange}
                  value={news[idx].body}
                  className="body"
                />

                <Heading2 htmlFor={linkId}>Link:</Heading2>

                <input
                  type="text"
                  name={linkId}
                  data-id={idx}
                  id={linkId}
                  value={news[idx].link}
                  onChange={this.handleChange}
                  className="link"
                />

                <RedButton onClick={this.removeClick.bind(this, idx)}>
                  Delete Item
                </RedButton>
              </div>
            );
          })}
          <CenterDiv>
            <Heading2 htmlFor="email">Enter your Email Address</Heading2>
            <input
              type="text"
              className={errors.email ? "error" : ""}
              name="email"
              id="email"
              onChange={this.onChange}
              value={email}
            />
          </CenterDiv>
          <CenterDiv>
            <GreenButton onClick={this.addNewsItem}>Add News Item</GreenButton>
            <BlueButton
              type="submit"
              onClick={this.onSubmit}
              value="Submit"
              disabled={!isEnabled}
            >
              Save Newsletter
            </BlueButton>
            <YellowButton type="send" value="Send">
              Send
            </YellowButton>
          </CenterDiv>
        </Wrapper>
      </form>
    );
  }
}

const CreatorForm = compose(
  withRouter,
  withFirebase
)(CreatorFormBase);

export default CreatorPage;
export { CreatorForm };
