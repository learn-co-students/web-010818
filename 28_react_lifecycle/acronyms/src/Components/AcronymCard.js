import React, { Component } from "react";
import Card from "./Card";

const AcronymCard = props => {
  const { short, long, url } = props.acronym;

  return <Card url={url} title={short} description={long} />;
};

export default AcronymCard;
