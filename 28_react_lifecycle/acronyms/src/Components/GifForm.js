import React, { Component } from "react";

class GifForm extends Component {
  state = {
    gifInput: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.gifInput);
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="gifInput"
              onChange={this.handleInputChange}
            />
            <input className="btn btn-primary" type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}

export default GifForm;
