import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cocteles from "./Cocteles";

const Details = () => {
  const [bebidas, setBebidas] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const dataJson = await data.json();
      setBebidas(dataJson);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="section--details">
        <Link to="/">
          <button className="btn--back">BACK HOME</button>
        </Link>
        <div className="details--container">
          <h1>{bebidas?.title}</h1>
          <div className="coctel--info">
            <img
              className="coctel--img"
              src={bebidas?.url}
              alt="imagen de la bebida"
            />
            <div className="info--text">
              <div className="each">
                <span>Name: </span>
                <p>{bebidas?.title.slice(0, 10)}</p>
              </div>
              <div className="each">
                <span>Category :</span>
                <p>{bebidas?.id}</p>
              </div>
              <div className="each">
                <span>Info :</span>
                <p>{bebidas?.title}</p>
              </div>
              <div className="each">
                <span>Glass :</span>
                <p>Shot Glass</p>
              </div>
              <div className="each">
                <span>Instructons :</span>
                <p>{bebidas?.thumbnailUrl}</p>
              </div>
              <div className="each">
                <span>Ingredients :</span>
                <p>Alcohol</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
