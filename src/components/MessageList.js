import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: " "
    };
this.messagesRef = this.props.firebase.database().ref('messages');
};

  componentDidMount() {
  this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState ({
        messages: this.state.messages.concat( message )})
  });
}

  handleMessage(e) {
  this.setState({newMessage: e.target.value});
}


  createMessage(messageContent) {
      if (!this.state.newMessage) { return }
        this.messagesRef.push({
          content: messageContent,
          roomID: this.props.activeRoom.key,
          sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
          username: this.props.user.displayName ? this.props.user.displayName : "Guest",
});
    this.setState({ newMessage: ''});
}

  formatTime (time) {
    var date = new Date(time);
    var minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if ( this.hours >12 )
    { this.hours = this.hours - 12; }
    return (date.getHours() % 12)+ ":" + minutes + " on " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " ;
  }

render() {
return (
  <section>
      <table>
          <tbody>
              {this.state.messages.map( (message) =>
                  this.props.activeRoom.key === message.roomID && (
                  <tr key={message.key}>
                      <td>"{message.content}"</td>
                      <td>submitted by {message.username}</td>
                      <td>at {this.formatTime(message.sentAt)}</td>
                  </tr>
                  )
              )}
          </tbody>
      </table>
  <form onSubmit={ (e) => { e.preventDefault(); this.createMessage(this.state.newMessage) }}>
      <p>New Message</p>
      <input type="text"
             placeholder="New Message"
             value={this.state.newMessage}
             onChange={e => this.handleMessage(e)}></input>
      <button>Submit</button>
  </form>
</section>
);
}
}

export default MessageList;
