import React, { Component } from "react";
import { withAuthorization } from "./Session";

class Instructions extends Component {
  render() {
    return (
      <div>
        <h3>The Instructions Page</h3>
        <br />
        Here will be a detailed description of how to operate and use the web
        application.
        <br />
        This will include images and text to guide the user through the
        newsletter creation process.
      </div>
    );
  }
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Instructions);
