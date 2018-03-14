import React, { Component } from "react";
import AcronymList from "../Components/AcronymList";
import AcronymForm from "../Components/AcronymForm";

class AcronymContainer extends Component {
  state = {
    filter: "",
    order: "ascending",
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

  render() {
    return (
      <div>
        <div className="row">
          <AcronymList acronyms={this.state.acronyms} />
          <AcronymForm handleAdd={this.addAcronym} />
        </div>
      </div>
    );
  }
}

export default AcronymContainer;
