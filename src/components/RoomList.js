import React, { Component } from 'react';
import './RoomList.css';
import * as firebase from 'firebase';




class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  render() {
    return (
      <section className="RoomList">
        
        <h1>this.roomsRef = this.props.firebase.database().ref('rooms');</h1>
        </header>

      </section>
    );
  }
}

export default RoomList;
