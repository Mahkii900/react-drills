import React, { Component } from "react";
import "./App.css";
import ToDo from './components/Todo'

class App extends Component {
  constructor() {
    super()
    this.state ={
      taskArr: [],
      newTask: ''
    }
  }

  updateTasks() {
    this.setState({taskArr: [...this.state.taskArr, this.state.newTask]})
    this.setState({newTask: ''})
  }

  changeHandler(value) {
    this.setState({newTask: value})
  }

  render() {
    
    return (
      <div className="App">
        <input onChange={(e) => this.changeHandler(e.target.value)}/>
        <button onClick={() => this.updateTasks()}>Add</button>
        <div>
          <ToDo taskArr={this.state.taskArr}/>
        </div>
      </div>
    );
  }
}

export default App;
