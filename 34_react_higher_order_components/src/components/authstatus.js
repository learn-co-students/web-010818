import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthStatus extends Component {
  render() {
    const welcomeOrNot = (this.props.user ? (<li>Hello, { this.props.user.name }</li>) : "");
    return (
      <ul className="auth">
        { welcomeOrNot }
        <li>
          <Link to={ this.props.user ? "/logout" : "/login" }>
            { this.props.user ? "Log out" : "Log in" }
          </Link>
        </li>
      </ul>
    );
  }
}

export default AuthStatus;
