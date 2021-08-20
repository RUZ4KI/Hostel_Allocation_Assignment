import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Home from "./components/Home";
//import Login from "./components/Login";

firebase.initializeApp({
  apiKey: "AIzaSyD-ZkEUXsWPMeC9cWZXslvz-gpd7NzdyTk",
  authDomain: "hostel-assignment-3a269.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <Home/>
        ) : 
        (  
          <div className="Login">
            <h1>Hostel Allocation</h1>
            <h2>Please sign-in:</h2>
            <StyledFirebaseAuth 
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
          </div>
        )
        }
      </div>
    )
  }
}

export default App