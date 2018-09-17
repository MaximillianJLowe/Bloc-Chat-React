import React, { Component } from 'react';

class MessageList extends Component {
	constructor(props) {
		super(props);
		this.messagesRef = this.props.firebase.database().ref('messages');
		this.state = {
			username: "",
			content: "",
			sentAt: "",
			messages: [],
			roomID: "",
		};
}

	componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
             const message = snapshot.val();
             message.key = snapshot.key;
						 this.setState({ messages: this.state.messages.concat( message) })
        });
   		}

//createMessage(e){
	//e.preventDefault();
		//if (!this.state.content) {
			//return
		//}
		//this.messagesRef.push({
		//})
//}

	render() {
		const messageList =
		this.state.messages.filter(message =>
			message.roomId === this.props.activeRoom.key).map((message) =>
        <section className="message-item" key={message.key}>
          <ul>
          <li className="message-sent-at">{message.sentAt}</li>
          <li className="message-username">{message.username}</li>
          <li className="message-content">{message.content}</li>
					</ul>
				</section>

    );

		return (
			<section>
				{messageList}
			</section>
		)}

};

export default MessageList;
