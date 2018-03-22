import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Container from "./components/Container";
import LoginForm from "./LoginForm";

class App extends Component {
  state = {
    cart: [],
    user: {},
    isLoggedIn: false
  };

  // { username: "beef", password: "steak"}


  logout = () => {
    this.setState({
      isLoggedIn: false
    })
    localStorage.removeItem('jwt')
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      let options = {
        method: "GET", 
        headers: {
          "Content-Type":"application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      }
      fetch("http://localhost:3000/profile", options)
        .then((res) => res.json())
        .then((json) => {

          this.setState({
            user: json
          })
  
        })
    } else {
      console.log("You are not logged in")
    }
  }

  loginUser = (loginParams) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(loginParams)
    }
    fetch("http://localhost:3000/login", options)
      .then((res) => res.json())
      .then((json) => {

        
        /// IM about to set state 
        localStorage.setItem("jwt", json.token)
        this.setState({
          user: json.user,
          isLoggedIn: true 
        }, () => {
          
        })


        /// Okay well re render!!!!!!


        /// LocalStorage I'm going to set myself 

        
        console.log(json)
      })
  }

  addToCart = item => {
    this.setState({
      cart: [...this.state.cart, item]
    });
  };

  render() {


    /// coool let me ask about localStorage
    if (localStorage.getItem('jwt')) {
      return (
      <div>
        <p>Hello {this.state.user.username}</p>
        <button onClick={this.logout}>Logout</button>
      </div>
      )
    } else {
      return <div><LoginForm handleLogin={this.loginUser}/></div>;
    }
    
  }
}

export default App;
