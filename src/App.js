import React, { Component } from 'react';
import './App.css';

import web3 from './web3';
import inbox from './inbox';

class App extends Component {
  state = {
    message: '',
    accountNumber: '',
    balance: '',
    value: '',

  }

  async componentDidMount() {
    const message = await inbox.methods.message().call();
    const accountNumber = await inbox.options.address;
    const balance = await web3.eth.getBalance(inbox.options.address);
    this.setState({ message, accountNumber, balance })
  }


  render() {
    return (

      <div className="App">
        <h1>Inbox contract</h1>
        <p>Message is : {this.state.message}<br />
          Account of deployed contract : {this.state.accountNumber}<br />
          Account balance of deployed contract : {web3.utils.fromWei(this.state.balance, 'ether')} ether!
        </p>
        <hr />
        <p>
          <form>
            Enter message : <input value={this.state.value} onChange={event => this.setState({ value: event.target.value })} /> 
            <button>Enter</button>
          </form>   
        </p>
      </div>
        );
  }
}

export default App;
