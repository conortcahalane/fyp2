//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React from "react";
import styled from "styled-components";

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
const Text = styled.h1`
  font-size: 1.75em;
  text-align: left;
  color: #af5a76;
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

const NewsItems = props => {
  return props.news.map((val, idx) => {
    let headingId = `heading-${idx}`,
      bodyId = `body-${idx}`;
    return (
      <div key={idx}>
        <div key={idx}>
          <label htmlFor={headingId}>{`News Item #${idx + 1}`}</label>
        </div>
        <label htmlFor={headingId}>Heading:</label>
        <input
          type="text"
          name={headingId}
          data-id={idx}
          id={headingId}
          value={props.news[idx].name}
          className="name"
        />
        <label htmlFor={bodyId}>Body:</label>
        <textarea
          type="text"
          name={bodyId}
          data-id={idx}
          id={bodyId}
          value={props.news[idx].body}
          className="body"
        />
        <div>
          <RedButton onClick={() => this.onDelete(this.props.news.idx)}>
            Delete
          </RedButton>
        </div>
      </div>
    );
  });
};
export default NewsItems;
