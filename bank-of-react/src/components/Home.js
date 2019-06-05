import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
        getCredits(){
            console.log("credits")
            fetch("https://moj-api.herokuapp.com/credits")
              .then(function(response) {
                return response.json();
              })
              // When the real data is sent and readable
              .then(function(myJson) {
                  // console.log(myJson)
                  let creditTotal = 0;
                  for(let i = 0; i < myJson.length; i++){
                      creditTotal += (myJson[i].amount * -1)
                  }
                  console.log(creditTotal)
              });
        }

        getDebits(){
            fetch("https://moj-api.herokuapp.com/debits")
              .then(function(response) {
                return response.json();
              })
              // When the real data is sent and readable
              .then(function(myJson) {
                  let debitTotal = 0;
                  for(let i = 0; i < myJson.length; i++){
                      debitTotal += (myJson[i].amount)
                  }
                console.log(debitTotal)
              });
        }

        componentWillMount(){
            this.getCredits();
            this.getDebits();
        }
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;
