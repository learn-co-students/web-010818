import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  // state = {
  //   search: ""
  // };
  // handleSearch = e => {
  //   e.preventDefault();
  // };

  handleInputChange = e => {
    this.props.onSubmit(e.target.value);
    // this.setState(
    //   {
    //     search: e.target.value
    //   },
    //   () => {
    //     this.props.onSubmit(this.state.search);
    //   }
    // );
  };
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">Acronymizer</a>
        <NavLink
          className="nav-item"
          activeClassName="active"
          activeStyle={{ backgroundColor: "blue" }}
          to="/acronyms"
        >
          Acronyms
        </NavLink>
        <NavLink className="nav-item" to="/gifs">
          Gifs
        </NavLink>
        <form className="form-inline" onSubmit={this.handleSearch}>
          <input
            onChange={this.handleInputChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button> */}
        </form>
      </nav>
    );
  }
}

export default NavBar;
