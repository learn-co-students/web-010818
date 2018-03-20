import React, { Component } from "react";
import Card from "./Card";
// SHOULD BE FUNCTIONAL...KINDA SMELLY
export default class List extends Component {
  render() {
    const items = this.props.results.map(result => {
      return <Card result={result} />;
    });
    return <div>{items}</div>;
  }
}
