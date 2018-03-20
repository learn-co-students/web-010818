import React from "react";

const Nav = props => {
  const cartItems = props.cart.map(item => {
    return (
      <a className="dropdown-item" href="">
        {item.name}
      </a>
    );
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="">
        Favourite Things
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item dropdown pull-right">
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cart
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {props.cart.length ? cartItems : null}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
