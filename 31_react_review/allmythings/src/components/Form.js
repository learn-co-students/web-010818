import React, { Component } from "react";

export default class Form extends Component {
  state = {
    search: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    // do something
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    console.log(this.state.search);
    return (
      <div>
        <form className="form-inline my-lg-2" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            className="form-control"
            type="text"
            name="search"
            value={this.state.search}
          />
          <input className="btn btn-light" type="submit" value="Go" />
        </form>
      </div>
    );
  }
}
