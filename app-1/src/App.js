import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  changeHandler(input) {
    this.setState({text: input})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input onChange={(e) => this.changeHandler(e.target.value)}/>
          <div>
            <h4>{this.state.text}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
