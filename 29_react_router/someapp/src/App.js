import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="circle">
          <p>Hello Im a circle</p>
        </div>

        <div className="box">
          <p>Hello Im a box</p>
        </div>

        <a href="/beef">Take me to steak</a>
        <hr />
        <Link to="/beef">Take me to bananas</Link>
        <Route path="/beef" component={HelloComponent} />
      </div>
    );
  }
}

export default App;

class HelloComponent extends Component {
  render() {
    return <p>Hello Component</p>;
  }
}

const HelloWorld = () => {
  return <p>Hello World</p>;
};
