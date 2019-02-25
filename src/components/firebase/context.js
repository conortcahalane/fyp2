//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import React from "react";
//createContext() function creates two components.
//The FirebaseContext.Provider component is used to provide a Firebase instance 
//once at the top-level of your React component tree,
// and the FirebaseContext.Consumer component is used to retrieve the Firebase instance 
//if it is needed in the React component.

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
