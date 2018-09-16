import React from "react";

const BeerDisplay = props => {
  if (props.beer !== undefined && props.beer !== null) {
    let {
      name,
      available,
      abv,
      ibu,
      srm,
      og,
      description,
      labels,
      glass,
      style
    } = props.beer;
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <h4>{name}</h4>
            <p>
              <strong> Available: </strong>
              {available !== undefined ? available.description : "Unkown"}
            </p>
            <p>
              <strong> Alcohol by volume: </strong>
              {abv !== undefined ? abv : "Not Available"}%
            </p>
            <p>
              <strong> International Bitterness Units: </strong>
              {ibu !== undefined ? ibu : "N/A"}
            </p>
            <p>
              <strong> Standard Reference Method: </strong>
              {srm !== undefined ? srm.name : "N/A"}{" "}
              <span
                style={
                  srm !== undefined
                    ? {
                        backgroundColor: "#" + srm.hex
                      }
                    : {}
                }
              >
                &emsp;&emsp;
              </span>
            </p>
            <p>
              <strong> Original Gravity: </strong>
              {og !== undefined ? og : "Not Available"}
            </p>
            <p>
              <strong> Recomended glass: </strong>
              {glass !== undefined ? glass.name : "Not Available"}
            </p>
          </div>
          <div className="col s12 m6">
            <img
              className="beerLabel"
              src={labels !== undefined ? labels.medium : "img/sorry.png"}
              alt=""
            />
          </div>
          <div className="col s12">
            <p>
              <strong> Description: </strong>{" "}
              {description !== undefined ? description : "Not Available"}
            </p>
            <p>
              <strong> Style: </strong>
              {style.category.name !== undefined
                ? style.category.name
                : "Not Available"}
              <br /> &emsp;&emsp;
              {style.description !== undefined
                ? style.description
                : "Not Available"}
            </p>
          </div>
        </div>

        {typeof props.beer === "object"
          ? console.log("props", props.beer.name)
          : null}
        {props.beer !== null ? console.log("props", props.beer.id) : null}
      </div>
    );
  } else {
    return (
      <h1 className="center">
        🤷‍‍ <br /> No beers found <br /> <br /> Please try something else
      </h1>
    );
  }
};

export default BeerDisplay;
