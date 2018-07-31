import React, { Component } from 'react';
import './App.css';
//we can just import from the folder, because the default file
//is index.js
import Login from './Login'; // just made class in index.js folder Login
import MainContainer from './MainContainer';

//read more about lifting up state

class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  login = (username) => {
    //we will setState of this componet, but we will call it in the login component
    console.log('login function in app is working', username);
    //creating a function below login...


    console.log(this.state, ' inside of app component');

    // The last thing you want to do in your function
    this.setState({
      username: username,
      logged: true
    });

  }
  //look up ---> ternary statement in React, how to handle the rendering of two
  //componetes base on a boolean value
  render() {
    
    return (
      <div className="App">
      
          {(this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login}/>)}
        
        


      </div>
    );
  }
}

export default App;
