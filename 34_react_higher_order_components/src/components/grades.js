import React, { Component } from 'react';

class Grades extends Component {
  render() {
    return (
      <ul className="grades">
        <li>Terrance: 4</li>
        <li>Ashlee: 5</li>
        <li>Graham: &minus;2</li>
        <li>Johann: BEEF</li>
      </ul>
    );
  }
}

export default Grades;
