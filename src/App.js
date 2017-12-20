import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { auth, database } from "./firebase";
import SignIn from './components/SignIn'
import './App.css';
import UserDash from "./components/UserDash";
import Search from "./components/Search";
import Booking from './components/Booking';
import Favorite from './components/Favorite'

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
            <Switch>
              <Route exact path='/' render={() => user ? <UserDash user={user}/> :  <SignIn />  }/>
                <Route exact path='/search' component={Search}/>
              <Route exact path='/bookings' component={Booking}/>
                <Route exact path='/favorites' component={Favorite}/>

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
