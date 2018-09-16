import React from "react";
import BeerDisplay from "./BeerDisplay";
const Results = props => {
  console.log("beers", typeof props.beers);
  let beerList = [];
  if (props.beers.length > 0) {
    beerList = props.beers.map(beer => {
      return (
        <span
          className="center"
          onClick={() => props.onBeerSelect(beer)}
          key={beer.id}
          className="waves-effect waves-light btn light-blue darken-2"
        >
          {beer.name}{" "}
        </span>
      );
    });
  }

  return (
    <div>
      <div className="center">{beerList}</div>
      <br />
      <BeerDisplay beer={props.selectedBeer} />
    </div>
  );
};

export default Results;
