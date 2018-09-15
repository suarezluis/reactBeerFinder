import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
var http = require("http");

class Finder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      name: ""
    };
  }

  render() {
    // fetch(
    //   "https://api.brewerydb.com/v2/search/?key=25e5612de5524a1bf68a0933f4b4562a&q=black&type=beer",
    //   { method: "get", mode: "no-cors" }
    // ).then(function(response) {
    //   console.log(response.json());
    // });

    return (
      <div className="row container">
        {/* <SearchBar onSearchTermChange={term => this.beerSearch(term)} /> */}
      </div>
    );
  }
}

export default Finder;
