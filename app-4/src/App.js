import React, { Component } from "react";
import "./App.css";
import Login from './components/Login'

class App extends Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
