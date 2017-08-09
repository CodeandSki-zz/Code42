import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserAction from './Action';
import ComponentExample from './Component';
import Component2Example from './Component2';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
}
  

  nameHandler(name) {
    const 
      userArray  = UserAction();
    let 
      userDetails = [];

    console.log(userDetails);
  }



  render() {
    const 
      userArray  = UserAction();
      
      
    let 
      emptyArray  = [];

    var arrayLength = userArray.length;
    for (var i = 0; i < arrayLength; i++) {
      emptyArray.push(
        <ComponentExample
          name={userArray[i]['login']}
          nameHandler={this.nameHandler.bind(this ,userArray[i]['login'])}
          key={i}
          >
        </ComponentExample>
        )
    } 

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <h2>Code42</h2>
        </div>
        <div id="header"></div>
          <div id="body">
            <div id="user_details"></div>
            <div id="sidebar" className="col-sm-4">
              {emptyArray}
            </div>
            <div id="main">
            </div>
          </div>
       </div>
    );
  }
}

export default App;
