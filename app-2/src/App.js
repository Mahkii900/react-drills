import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ['1','2','bob','logos','pete']
    }
  }

  render() {
    let listArray = this.state.arr.map((ele,ind) => {return <h2 key={ind}>{ele}</h2>})
    return (
      <div className="App">
        <div>{listArray}</div>
      </div>
    )
  }
}

export default App;
