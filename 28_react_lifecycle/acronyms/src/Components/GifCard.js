import React, { Component } from "react";
import Card from "./Card";

const GifCard = props => {
  let { title, url } = props.gif;
  return <Card url={url} title={title} description={url} />;
};

export default GifCard;
