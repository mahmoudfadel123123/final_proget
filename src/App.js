import React from 'react';

import Feature from './Feature';
import Footer from './Footer';
import Gategory from './Gategory';
import Hero from './Hero';
import Header from './Header';
import Nav from './Nav';
import Shop from './Shop';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';



// Configure Firebase.
const config = {
  apiKey: 'AIzaSyCzBd9i0OpfdlLfWv4sLPiNKeidyGLFXJY',
  authDomain: 'final-9a0d0.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
 
class App extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div  className="M">
          <h1 >Mahmoud</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
      
        
        
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>



<Nav/>
        <Header/>
       
     
       
        <Hero/>
        <Feature/>
        <Gategory/>

<Shop/>


   
  
 
<Footer/>



      </div>

     
    );
  }
}
export default App;