import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Container from "./components/Container";

class App extends Component {
  state = {
    cart: []
  };

  addToCart = item => {
    this.setState({
      cart: [...this.state.cart, item]
    });
  };

  render() {
    return (
      <div>
        <Nav cart={this.state.cart} />
        <div className="container-fluid">
          <Container onAddToCart={this.addToCart} />
        </div>
      </div>
    );
  }
}

export default App;
