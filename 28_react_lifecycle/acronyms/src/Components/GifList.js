import React, { Component } from "react";
import GifCard from "./GifCard";

export default class GifList extends Component {
  render() {
    const gifs = this.props.gifs.map(g => {
      let gif = { url: g.images.fixed_width.url, title: g.title };
      return <GifCard key={g.id} gif={gif} />;
    });
    return <div>{gifs}</div>;
  }

  componentWilLReceiveProps(nextProps) {
    console.log(nextProps);
  }
}
