import React, { Component } from "react";

class AcronymForm extends Component {
  state = {
    short: "",
    long: "",
    url: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    let acronym = this.state;
    this.props.handleAdd(acronym);
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // componentDidMount() {
  //   console.log("AcronymF - Did Mount");
  // }
  //
  // componentWillMount() {
  //   console.log("AcronymF - Will Mount");
  // }

  render() {
    // console.log("AF - Render");
    return (
      <div className="col-lg-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              className="form-control"
              type="text"
              name="short"
              placeholder="Short"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              className="form-control"
              type="text"
              name="long"
              placeholder="Long"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              className="form-control"
              type="text"
              name="url"
              placeholder="Url"
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Create Acronym"
          />
        </form>
      </div>
    );
  }
}

export default AcronymForm;
