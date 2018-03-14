import React, { Component } from "react";

export default class GifContainer extends Component {
  state = {
    defaultSearch: "cat",
    gifs: [],
    gifInput: ""
  };

  fetchGifs = searchTerm => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=SGFR10G5ENf4Rr5BsmhuSfN8eAvxHCSP&q=${
        searchTerm
      }&limit=10&offset=0&rating=G&lang=en`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          gifs: json.data
        });
      });
  };

  componentDidMount() {
    this.fetchGifs(this.state.defaultSearch);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchGifs(this.state.gifInput);
  };

  render() {
    const gifs = this.state.gifs.map(gif => {
      let url = gif.images.fixed_width.url;
      let title = gif.title;
      return (
        <div className="card">
          <img className="card-img-top" src={url} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{url}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="gifInput"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Search" />
        </form>
        <div>{gifs}</div>
      </div>
    );
  }
}
