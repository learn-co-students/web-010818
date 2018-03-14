import React, { Component } from "react";
import "./App.css";
import AcronymContainer from "./Containers/AcronymContainer";

import NavBar from "./Components/NavBar";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="jumbotron">
            <AcronymContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
