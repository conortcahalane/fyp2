//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application
//https://www.npmjs.com/package/react-router-dom --> used for routing throughout the application

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Firebase, { FirebaseContext } from "./components/firebase";

ReactDOM.render(
  //ensures firebase is only instaniated once
  //it is injected via React’s Context API to React’s component tree
  //every component that is interested in using Firebase has access to the Firebase instance with a FirebaseContext.Consumer component
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
