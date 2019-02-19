import React from "react";
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
  padding: 3em;
  background: papayawhip;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "#699864" : "white")};
  color: ${props => (props.primary ? "white" : "#699864	")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid #699864;
  border-radius: 3px;
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

class Creator extends React.Component {
  state = {
    news: [{ heading: "", body: "", link: "" }],
    name: "",
    description: ""
  };
  handleChange = e => {
    if (["heading", "body", "Link"].includes(e.target.className)) {
      let news = [...this.state.news];
      news[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ news }, () => console.log(this.state.news));
    } else {
      this.setState({ [e.target.heading]: e.target.value });
    }
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

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    let { name, description, news } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Wrapper>
          <NewsTitle>Newsletter Creator</NewsTitle>
          <br />
          <div>
            <Heading htmlFor="heading">Newsletter Title:</Heading>
            <input type="text" heading="name" id="name" value={name} />
          </div>
          <div>
            <Heading2 htmlFor="description">Description</Heading2>
            <input
              type="text"
              heading="description"
              id="description"
              value={description}
            />
          </div>
          <Button onClick={this.addNewsItem}>Add News Item</Button>
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
                  className="heading"
                />
                <Heading2 htmlFor={bodyId}>Body:</Heading2>
                <input
                  type="text"
                  name={bodyId}
                  data-id={idx}
                  id={bodyId}
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
                  className="link"
                />
                <RedButton onClick={this.removeClick.bind(this, idx)}>
                  Delete Item
                </RedButton>
              </div>
            );
          })}
          <input type="submit" value="Submit" />
        </Wrapper>
        <Footer>
          <FooterText>
            Developed by Conor Cahalane using React and Firebase
          </FooterText>
        </Footer>
      </form>
    );
  }
}
export default Creator;
