import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

const Cocteles = (props) => {
  const [datos, setDatos] = useState(props);

  return (
    <div className="coctel--item">
      <div className="image--container">
        <img className="image--coctel" src={props.url} />
      </div>
      <div className="text--coctel">
        <h2>{props.title}</h2>
        <h4>Collins Glass</h4>
        <p>Optional alcohol</p>
        <Link to={`${props.id}`}>
          <button className="button--details">DETAILS</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocteles;
