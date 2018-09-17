import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);
      this.roomsRef = this.props.firebase.database().ref('rooms');
      this.state = {
        rooms: [],
        newRoomName: " "
    };
}

    componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) });
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
          newRoomName : " "
        });
}

    handleChange(e) {
      this.setState({
        newRoomName: e.target.value
      });
}

    render() {
      return (
        <sidebar className="chatroom-list">
          {this.state.rooms.map( (room, index) =>
            <div key={index}>{room.name}</div>
      )}
            <div>
              <form onSubmit={ (e) => this.createRoom(e) }>
                  <input type= "text"
                         id= "create-room"
                         onChange={ (e) => this.handleChange(e) }
                         value={this.state.newRoomName} />
                  <input type="submit"
                         value="New Room" />
              </form>
            </div>
        </sidebar>
      );
   }
}

export default RoomList;
