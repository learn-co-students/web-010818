import React, { Component } from 'react';

class Labs extends Component {


  constructor(props){
    super(props);
    console.log("Labs", props);
  }


  render() {
    return (
      <ul className="labs">
        <li>Hogs</li>
        <li>Bookstore</li>
        <li>Spotify</li>
        <li>Hashketball</li>
        <li>Hospital</li>
        <li>Bananas</li>
        <li>Beef</li>
      </ul>
    );
  }
}

export default Labs;
