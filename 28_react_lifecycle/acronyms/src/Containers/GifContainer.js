import React, { Component } from "react";
import GifList from "../Components/GifList";
import GifForm from "../Components/GifForm";
import GifApi from "../services/GifApi";
export default class GifContainer extends Component {
  state = {
    defaultSearch: "cat",
    gifs: [],
    gifInput: ""
  };

  fetchGifs = searchTerm => {
    GifApi.fetchGifs(searchTerm).then(json => {
      this.setState({
        gifs: json.data
      });
    });
    // fetch(
    //   `https://api.giphy.com/v1/gifs/search?api_key=SGFR10G5ENf4Rr5BsmhuSfN8eAvxHCSP&q=${
    //     searchTerm
    //   }&limit=10&offset=0&rating=G&lang=en`
    // )
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       gifs: json.data
    //     });
    //   });
  };

  componentDidMount() {
    this.fetchGifs(this.state.defaultSearch);
  }

  render() {
    return (
      <div>
        <GifForm onSearch={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
