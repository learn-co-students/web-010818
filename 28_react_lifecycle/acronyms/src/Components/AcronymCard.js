import React, { Component } from "react";
import Card from "./Card";

class AcronymCard extends React.Component {
  componentWillUnmount() {
    console.log("NO!! IM dying", this.props.acronym);
  }

  render() {
    const { short, long, url } = this.props.acronym;

    const handleClick = event => {
      this.props.onDeleteAcronym(short);
    };
    return (
      <div>
        <Card url={url} title={short} description={long} />
        <button onClick={handleClick} className="btn btn-delete">
          X
        </button>
      </div>
    );
  }
}

export default AcronymCard;
