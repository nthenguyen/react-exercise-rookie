import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    bootcamp: "Rookies",
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home bootcamp={this.state.bootcamp} />
      </div>
    );
  }
}

export default App;
