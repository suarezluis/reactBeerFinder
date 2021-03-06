import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Results from "./Results";
class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.beerSearch = this.beerSearch.bind(this);
    this.state = {
      name: "",
      beers: [],
      selectedBeer: null
    };
    this.beerSearch("Pacena");
  }

  render() {
    return (
      <div className="row container finder">
        <SearchBar
          term={this.state.name}
          onSearchTermChange={term => this.beerSearch(term)}
        />
        <Results
          selectedBeer={this.state.selectedBeer}
          beers={this.state.beers}
          onBeerSelect={selectedBeer => this.setState({ selectedBeer })}
        />
      </div>
    );
  }

  beerSearch = name => {
    var self = this;
    axios
      .get("https://suarezluis-beerapi.herokuapp.com/" + name)
      .then(function(response) {
        self.setState({
          name: name,
          beers:
            typeof response.data !== undefined ? response.data.slice(0, 5) : [],
          selectedBeer: response.data[0]
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default Finder;
