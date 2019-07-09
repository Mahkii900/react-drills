import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image picSrc={"https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"}/>
      </div>
    );
  }
}

export default App;
