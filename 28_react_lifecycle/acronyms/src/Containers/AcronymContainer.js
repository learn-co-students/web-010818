import React, { Component } from "react";
import AcronymList from "../Components/AcronymList";
import AcronymForm from "../Components/AcronymForm";
import AcronymCard from "../Components/AcronymCard";
import { Route, Switch } from "react-router-dom";

class AcronymContainer extends Component {
  // componentWillMount() {
  //   console.log("Will Mount");
  // }
  //
  // componentDidMount() {
  //   console.log("Did Mount");
  // }
  state = {
    filter: "",
    order: "A-Z",
    acronyms: [
      {
        short: "LOL",
        long: "Laugh Out Loud",
        url: "https://media.giphy.com/media/1ZDDyyFQYRYYdYrL6o/giphy.gif"
      },
      {
        short: "TTYL",
        long: "Talk to Yall later",
        url:
          "https://media.giphy.com/media/l4FGn8asw5EJrm10s/giphy-downsized.gif"
      }
    ]
  };

  addAcronym = acronym => {
    let newArray = [...this.state.acronyms, acronym];

    this.setState({
      acronyms: newArray
    });
  };

  deleteAcronym = short => {
    const newArray = this.state.acronyms.filter(a => a.short !== short);
    this.setState({
      acronyms: newArray
    });
  };

  handleSelectChange = e => {
    this.setState({
      order: e.target.value
    });
  };

  renderAcronyms = () => {
    let filteredAcronyms = this.state.acronyms.filter(a => {
      return (
        a.short.includes(this.props.filter) ||
        a.long.includes(this.props.filter)
      );
    });

    if (this.state.order == "A-Z") {
      filteredAcronyms = filteredAcronyms.sort((a, b) => a.short > b.short);
    } else {
      filteredAcronyms = filteredAcronyms.sort((a, b) => a.short < b.short);
    }
    return filteredAcronyms;
  };

  render() {
    // console.log("Rendering");
    /*
      Before we return we need to take the state and filter it
      if there isnt a search then filter should return everything
      if there is filter it


    */

    let filteredAcronyms = this.renderAcronyms();
    return (
      <div>
        <div>
          <select className="form-control" onChange={this.handleSelectChange}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className="row">
          <Route
            exact
            path="/acronyms"
            render={() => (
              <AcronymList
                acronyms={filteredAcronyms}
                handleDelete={this.deleteAcronym}
              />
            )}
          />
          <Switch>
            <Route
              path="/acronyms/new"
              render={() => {
                return <AcronymForm handleAdd={this.addAcronym} />;
              }}
            />
            <Route
              path="/acronyms/:id"
              render={props => {
                let id = props.match.params.id;
                let acronym = this.state.acronyms[id];

                return <p>Hello World</p>;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AcronymContainer;
