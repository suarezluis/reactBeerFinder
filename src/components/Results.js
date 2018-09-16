import React from "react";
import BeerDisplay from "./BeerDisplay";
const Results = props => {
  const beerList = props.beers.map(beer => {
    return <span key={beer.id}>{beer.name} </span>;
  });

  return (
    <div>
      {beerList}
      <BeerDisplay beer={props.selectedBeer} />
    </div>
  );
};

export default Results;
