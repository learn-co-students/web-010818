import React, { Component } from "react";

const AcronymCard = props => {
  const { short, long, url } = props.acronym;

  return (
    <div className="card">
      <img className="card-img-top" src={url} alt="Card image cap" />
      <div className="card-body">
        <h3 className="card-title">{short}</h3>
        <p className="card-text">{long}</p>
      </div>
    </div>
  );
};

export default AcronymCard;
