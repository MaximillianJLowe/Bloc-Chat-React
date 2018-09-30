import React, { Component } from 'react';
import './RoomList.css';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    rooms: [],
    newRoomName: '',
  };
  this.roomsRef = this.props.firebase.database().ref('rooms');
};

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState ({ rooms: this.state.rooms.concat( room )})
    });
}

 createRoom(e){
   e.preventDefault();
   if (!this.state.newRoomName) {
     return
   }
       this.roomsRef.push({
         name: this.state.newRoomName
      });
      this.setState({
        newRoomName: " "
      });
}

handleChange(e) {
  e.preventDefault();
  this.setState({
    newRoomName: e.target.value
  });
}

 render() {
      return (
        <section className="chatroom-block">
           <div>{this.state.rooms.map( (room, index) =>
               <div className="room-list"
                    key={room.key}
                    onClick={ () => this.props.setRoom(room) }>{room.name}
               </div>
        )}
           </div>
                <form onSubmit={ (e) => this.createRoom(e) }>
                    <input id= "create-room"
                           type="text"
                           placeholder="New Room Name"
                           onChange={ (e) => this.handleChange(e) }
                           value={this.state.newRoomName} />
                    <input type="submit"
                           value="New Room" />
                    <p>Selected Room: {this.props.activeRoom.name ? this.props.activeRoom.name : "None" }</p>
                </form>
        </section>
      );
    }
}

export default RoomList;
