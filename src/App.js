import React, { Component } from 'react';
import { auth, database } from "./firebase";
import SignIn from './components/SignIn'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }




  render() {
    return (
      <div className="App">
        <SignIn />
      </div>
    );
  }
}

export default App;
