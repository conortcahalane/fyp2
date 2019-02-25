//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application

import FirebaseContext, { withFirebase } from "./context";
import Firebase from "./firestore";

export default Firebase;

export { FirebaseContext, withFirebase };
