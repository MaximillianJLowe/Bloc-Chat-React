import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import './RoomList.js';

//<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA01uG3ibSdDl0ayq5ms8TifIgrnjtbhXM",
    authDomain: "bloc-chat-react-c18eb.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-c18eb.firebaseio.com",
    projectId: "bloc-chat-react-c18eb",
    storageBucket: "bloc-chat-react-c18eb.appspot.com",
    messagingSenderId: "94355144430"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">BLOC CHAT REACT</h1>
        </header>

      </div>
    );
  }
}

export default App;
