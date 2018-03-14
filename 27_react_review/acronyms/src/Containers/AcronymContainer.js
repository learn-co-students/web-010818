import React, { Component } from "react";
import AcronymList from "../Components/AcronymList";
import AcronymForm from "../Components/AcronymForm";

class AcronymContainer extends Component {
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

  handleSelectChange = e => {
    console.log(e.target.value);

    this.setState({
      order: e.target.value
    });
  };

  render() {
    /*
      Before we return we need to take the state and filter it 
      if there isnt a search then filter should return everything 
      if there is filter it 
    
    
    */
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

    console.log(filteredAcronyms);
    return (
      <div>
        <div>
          <select className="form-control" onChange={this.handleSelectChange}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
        <div className="row">
          <AcronymList acronyms={filteredAcronyms} />
          <AcronymForm handleAdd={this.addAcronym} />
        </div>
      </div>
    );
  }
}

export default AcronymContainer;
