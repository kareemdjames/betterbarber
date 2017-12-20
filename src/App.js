import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { auth, database } from "./firebase";
import SignIn from './components/SignIn'
import './App.css';
import UserDash from "./components/UserDash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }

  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log('Auth Change', user)
      this.setState({ user })
    })
}


  render() {
    const user = this.state.user

    return (
        <Router>
          <div>
            {!user && <SignIn />}
            {user && <UserDash user={user}/>}
          </div>
        </Router>
    );
  }
}

export default App;
