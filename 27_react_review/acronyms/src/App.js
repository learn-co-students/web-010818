import React, { Component } from "react";
import "./App.css";
import AcronymContainer from "./Containers/AcronymContainer";
import GifContainer from "./Containers/GifContainer";
import NavBar from "./Components/NavBar";
class App extends Component {
  state = {
    acronymFilter: ""
  };

  setAcronymFilter = filter => {
    console.log("APP");
    this.setState(
      {
        acronymFilter: filter
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <NavBar onSubmit={this.setAcronymFilter} />
        <div className="container">
          <div className="jumbotron">
            <AcronymContainer filter={this.state.acronymFilter} />
          </div>
          <GifContainer />
        </div>
      </div>
    );
  }
}

export default App;
