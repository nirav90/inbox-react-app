import React, { Component } from 'react';
import './App.css';

import web3 from './web3';
import inbox from './inbox';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {message:'test'};
  }

  async componentDidMount(){
    const message = await inbox.methods.message().call();
    this.setState({ message })
  }


  render() {
    return (

      <div className="App">
        <h2>Inbox contract</h2>
        <h2>Inbox message is {this.state.message}</h2>
      </div>
    );
  }
}

export default App;
