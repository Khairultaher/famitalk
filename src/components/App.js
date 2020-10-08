import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import LoginContainer from "./LoginContainer";
import ChatContainer from "./ChatContainer";
import UserContainer from "./UserContainer";
import { myFirebase, db } from "../../public/firebase";

import "./app.css";

class App extends Component {
  state = { user: null, messages: [], messagesLoaded: false };

  componentDidMount() {
    myFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.props.history.push("/login");
      }
    });
    myFirebase
      .database()
      .ref("/messages")
      .on("value", (snapshot) => {
        this.onMessage(snapshot);
        if (!this.state.messagesLoaded) {
          this.setState({ messagesLoaded: true });
        }
      });
  }

  onMessage = (snapshot) => {
    const messages = Object.keys(snapshot.val()).map((key) => {
      const msg = snapshot.val()[key];
      msg.id = key;
      return msg;
    });
    this.setState({ messages });
  };

  handleSubmitMessage = (msg) => {
    const data = {
      msg,
      author: this.state.user.email,
      user_id: this.state.user.uid,
      timestamp: Date.now(),
    };
    myFirebase.database().ref("messages/").push(data);
  };

  render() {
    return (
      <div id="container">
        <Route path="/login" component={LoginContainer} />
        <Route
          exact
          path="/"
          render={() => (
            <ChatContainer
              messagesLoaded={this.state.messagesLoaded}
              onSubmit={this.handleSubmitMessage}
              user={this.state.user}
              messages={this.state.messages}
            />
          )}
        />
        <Route
          exact
          path='/users/:id'
          render={ ({ match})  => (                
            <UserContainer
              messages={this.state.messages}
              messagesLoaded={this.state.messagesLoaded}
              id={match.params.id}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
