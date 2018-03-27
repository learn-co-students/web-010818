import React from 'react';

export default function withAuthorization(Component, authorizedUsers, user) {
  return class extends React.Component {

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect(){
      if (authorizedUsers.indexOf(user) == -1)
        this.props.history.push("/login")
    }

    render() {
      return <Component {...this.props} />
    }

    
  }
};