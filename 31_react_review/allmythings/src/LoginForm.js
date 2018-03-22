import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();


    this.props.handleLogin(this.state)

    this.setState({
      username: "",
      password: ""
    })
    /// sign me in
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {

    return (
  <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="username" onChange={this.handleInputChange} value={this.state.username} />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <input type="submit" value="Log in" />
      </form>
    )
    
  }
}

export default LoginForm;
