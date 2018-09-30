import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';

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
    constructor(props){
      super(props);
      this.state = {
        activeRoom: "",
        user: ""
      };
    }

    setRoom(room) {
      this.setState({
        activeRoom: room
      });
      console.log(this.state.activeRoom);
      }

    setUser(user) {
      if(user) {
        this.setState ({
          user: user
        });
      } else {
        this.setState({
          user: 'Guest'
        });
      }
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
              <h1 className="App-title">BLOC CHAT REACT</h1>
          </header>
          <RoomList firebase={firebase} setRoom={this.setRoom.bind(this)} activeRoom={this.state.activeRoom}  />
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom} user={this.state.user} />
          <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user.displayName} />
        </div>
      );
    }
  }

  export default App;
