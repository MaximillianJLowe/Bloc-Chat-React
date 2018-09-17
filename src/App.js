import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';

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
    constructor(props) {
      super(props);
      this.state = {
        activeRoom: ""
      };
    }

    setRoom(room) {
      this.setState({
        activeRoom: room
      });
      console.log(this.state.activeRoom);
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
              <h1 className="App-title">BLOC CHAT REACT</h1>
          </header>
            <div>
              <RoomList firebase = {firebase} setRoom={this.setRoom.bind(this)} activeRoom={this.state.activeRoom} />
              <MessageList firebase = {firebase} activeRoom={this.state.activeRoom} />
            </div>
        </div>
    );
  }
}

export default App;
