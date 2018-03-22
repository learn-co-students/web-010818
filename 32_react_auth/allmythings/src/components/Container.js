import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import List from "./List";

class Container extends Component {
  state = {
    result: {},
    filter: "",
    similar: [],
    filteredResults: []
  };

  componentDidMount() {
    this.search("Iron Man");
  }

  search = term => {
    fetch(
      `https://tastedive.com/api/similar?q=${
        term
      }&k=303510-Flatiron-HNVIVA5G&info=1`
    )
      .then(res => res.json())
      .then(json => this.handleResponse(json));
  };

  parseResult(result) {
    return {
      name: result.Name,
      type: result.Type,
      description: result.wTeaser,
      url: result.wUrl,
      embed: result.yUrl
    };
  }
  handleResponse = json => {
    let result = json.Similar.Info[0];
    console.log(json);

    let searchResults = json.Similar.Results;
    let parsedResults = searchResults.map(r => {
      return this.parseResult(r);
    });
    this.setState({
      result: this.parseResult(result),
      similar: parsedResults
    });
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterResults() {
    let filteredResults = this.state.similar.filter(item => {
      return item.name.includes(this.state.filter);
    });

    return filteredResults;
  }

  render() {
    let results = this.filterResults();

    return (
      <div className="Container">
        <div className="row">
          <div className="col-lg-6">
            <Form onSubmit={this.search} />
          </div>
        </div>
        {this.state.result && this.state.similar.length ? (
          <div className="row">
            <div className="col-lg-6">
              <Result
                result={this.state.result}
                onAddResult={this.props.onAddToCart}
              />
              <form>
                <input onChange={this.handleFilter} type="text" name="filter" />
              </form>

              <List results={results} />
            </div>
            <div className="col-lg-6" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Container;
