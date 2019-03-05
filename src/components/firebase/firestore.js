//Websites used in the creation of this code
//https://reactjs.org/docs --> in reference to the javascript library
//https://firebase.google.com/docs  --> in reference to the database code
//https://www.styled-components.com/docs --> in reference to the styling of the application
import firebase from "firebase/app";
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDlAygt6Kf2xToheMgVj9PHUHi7jT1xlWI",
  authDomain: "fypfirebase1.firebaseapp.com",
  databaseURL: "https://fypfirebase1.firebaseio.com",
  projectId: "fypfirebase1",
  storageBucket: "fypfirebase1.appspot.com",
  messagingSenderId: "793818044054"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = firebase.database;
  }
  //  Auth API

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doCreateNewsletter = (news, name, description, email) => {
    const newsletter = { news, name, description, email };
    const newPostKey = this.db()
      .ref()
      .child("newsletters")
      .push().key;
    return this.db()
      .ref()
      .child("/newsletters/" + newPostKey)
      .set(newsletter);
  };

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  //  User API

  //ref() refers to the location where the data will be stored in Firebase’s realtime database API.
  user = uid => this.db().ref(`users/${uid}`);

  users = () => this.db().ref("users");

  //  News API

  //ref() refers to the location where the data will be stored in Firebase’s realtime database API.

  newsletter = uid => this.db().ref(`newsletters/${uid}`);

  newsletters = () => this.db().ref("newsletters");
}

export default Firebase;
