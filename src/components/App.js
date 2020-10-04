import React, { Component } from "react";
import { Route } from "react-router-dom";
import { myFirebase } from "../../public/firebase";
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';
import UserContainer from './UserContainer';
import './app.css';

class App extends Component {
  state = { user: null };
  componentDidMount() {
    myFirebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  render() {
    return (
      <div id="container">
         <Route exact path="/" component={ChatContainer} />
        <Route path="/login" component={LoginContainer} />      
        <Route path="/users/:id" component={UserContainer} />
      </div>
    );
  }
}
export default App;
