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
