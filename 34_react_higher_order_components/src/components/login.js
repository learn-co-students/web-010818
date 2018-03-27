import React, { Component } from 'react';

class Login extends Component {


  admins = ["johann", "graham"]
  users = ["johann", "graham", "ashlee", "terrance"]

  submit = (event) => {
    event.preventDefault();
    const who = event.target.querySelector("#name").value.toLowerCase();
    if (this.users.indexOf(who) !== -1) {
      const isAdmin = (this.admins.indexOf(who) !== -1)
      this.props.logIn({ name: who, isAdmin })
    }
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        <input id="name" type="text" />
        <input type="password" autoComplete='off'/>
        <input type="submit" autoComplete='off'/>
      </form>
    );
  }
}

export default Login;
