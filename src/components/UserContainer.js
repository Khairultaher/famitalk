import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./Header";
import {useParams} from 'react-router'
import { myFirebase } from "../../public/firebase";

class UserContainer extends Component {
  renderedUserEmail = false;
  getAuthor = (author) => {
    if (!this.renderedUserEmail) {
      this.renderedUserEmail = true;
      return <p className="author">{author}</p>;
    }
  };
  render() { 
    return (
      <div id="UserContainer" className="inner-container">
        <Header>
          <Link to="/">
            <button className="red">Back To Chat</button>
          </Link>
        </Header>
        {this.props.messagesLoaded ? (
          <div id="message-container">
            {this.props.messages.map((msg) => {
              if (msg.user_id === this.props.id) {
                return (
                  <div key={msg.id} className="message">
                    {this.getAuthor(msg.author)}
                    <p>{msg.msg}</p>
                  </div>
                );
              }
            })}
          </div>
        ) : (
          <div id="loading-container">
            <img src="../assets/icon.png" alt="logo" id="loader" />
          </div>
        )}
      </div>
    );
  }
}
export default UserContainer;