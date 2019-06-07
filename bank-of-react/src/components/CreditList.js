import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from "../store/index";
import { updateBalance } from "../actions/index";

class CreditList extends Component {
    constructor(props){
        super(props);
        // console.log(this)
        this.state = {
            accountBalance:this.props.accountBalance,
            transactions:[]
        }
    }

    getCredits=()=>{
        const that = this
        // console.log("credits")
        fetch("https://moj-api.herokuapp.com/credits")
          .then(function(response) {
            return response.json();
          })
          // When the real data is sent and readable
          .then(function(myJson) {
              // console.log(myJson)
              let creditTotal = 0;
              // console.log("stuff",myJson)
              that.setState({transactions:myJson})
              // console.log("trans",that.state.transactions)

          });
    }

    componentDidMount(){
        // console.log("here i am")
        this.getCredits()
        // console.log("trans", this.state.transactions)

    }

    componentWillUpdate(){
        // console.log("here i am")
        this.getCredits()
        console.log(this.state.transactions[0].id)

    }

    componentWillReceiveProps(nextProps) {
    console.log("test", nextProps)
  }

  render() {
    return (
        <div>
        <Link to="/">Home</Link>
          <h1>Credits</h1>

          <div>Balance: {this.state.accountBalance}</div>
          <div>Transactions:

          </div>
        </div>
    );
  }
}

export default CreditList;
