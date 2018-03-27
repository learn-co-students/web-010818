import React, { Component } from 'react';

class Logout extends Component {

  componentDidMount(){
    this.props.logOut();
  }

  render(){
    return <div />
  }

}

export default Logout;
