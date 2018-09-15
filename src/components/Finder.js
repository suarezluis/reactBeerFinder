import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class Finder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      name: ""
    };
  }

  render() {
    axios
      .get(
        `https://api.brewerydb.com/v2/search/?key=25e5612de5524a1bf68a0933f4b4562a&q=black&type=beer`
      )
      .then(res => {
        console.log(res);
      });
    return (
      <div className="row container">
        {/* <SearchBar onSearchTermChange={term => this.beerSearch(term)} /> */}
      </div>
    );
  }
}

export default Finder;
