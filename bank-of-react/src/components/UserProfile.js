// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getCredits(){
        console.log("credits")
    }

    getDebits(){
        console.log("debitss")
    }

    componentWillMount(){
        this.getCredits();
        this.getDebits();
    }

  render() {
    return (
        <div>
        <Link to="/">Home</Link>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
        </div>
    );
  }
}

export default UserProfile;
