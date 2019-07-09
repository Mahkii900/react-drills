import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      arr: ['bob', 'joe', 'fred', 'bill', 'chuck', 'phil', 'oliver', 'forrest', 'george'],
      filteredArr: [],
    }
  }

  displayFilter(value) {
    this.setState({filteredArr: this.state.arr.filter((ele) => ele.includes(value)).map((ele) => {return <h2>{ele}</h2>})})
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.displayFilter(e.target.value)}/>
        {this.state.filteredArr}
      </div>
    )
  }
}

export default App;
