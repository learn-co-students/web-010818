import React, { Component } from "react";
import AcronymCard from "./AcronymCard";
import uuid from "uuid";

class AcronymList extends React.Component {
  // componentDidMount() {
  //   console.log("AcronymList - Did Mount");
  // }
  //
  // componentWillMount() {
  //   console.log("AcronymList - Will Mount");
  // }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(this.props, this.state);
    console.log(nextProps, nextState);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("CWU", this.props, this.state);
    console.log("CWU", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU", this.props, this.state);
    console.log("CDU", prevProps, prevState);
  }
  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.acronyms.length == 0) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log("AcronymList - Render");
    const acronyms = this.props.acronyms.map(a => (
      <AcronymCard
        key={uuid()}
        onDeleteAcronym={this.props.handleDelete}
        acronym={a}
      />
    ));
    return (
      <div className="col-lg-8">
        <div className="acronym-list">{acronyms}</div>
      </div>
    );
  }
}

export default AcronymList;
