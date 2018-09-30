import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
}

  componentDidMount() {
      this.props.firebase.auth().onAuthStateChanged( user => {
          this.props.setUser(user);
});

  }

  signIn() {
  const provider = new this.props.firebase.auth.GoogleAuthProvider();
  this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut(){
    this.props.firebase.auth().signOut();
  }

  render () {
    return (
      <section className="sign-in-wrapper">
        <button type="button" value="sign-in" onClick={ () => this.signIn() }>Sign In</button>
        <button type="button" value="sign-out" onClick={ () => this.signOut() }>Sign Out</button>
        <p>Current user: {this.props.user ? this.props.user : "Guest"}</p>
    </section>
  );
  }
}

export default User;
