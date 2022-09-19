import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cocteles from "./Cocteles";

const Search = () => {
  const [text, setText] = useState("");
  const [drinks, setDrinks] = useState();
  const [search, SetSearch] = useState();

  useEffect(() => {
    const fetched = async () => {
      const dato = await fetch("https://jsonplaceholder.typicode.com/photos");
      const datoJson = await dato.json();
      const filterDato = datoJson.filter((info) => {
        return info.id <= 5;
      });
      setDrinks(filterDato);
      SetSearch(filterDato);
    };
    fetched();
  }, []);

  const coctel = search?.map((info) => {
    return <Cocteles {...info} key={info.id} />;
  });

  const buscar = (value) => {
    setText(value);
    const filteredSearch = drinks.filter((info) => {
      return info.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
    SetSearch(filteredSearch);
  };

  const noMatch = (
    <div className="found--container">
      <h1>Not found</h1>
    </div>
  );

  return (
    <>
      <div className="center--input">
        <div className="box--container">
          <h2>Search Your Favorite Cocktail</h2>
          <input
            type="text"
            value={text}
            onChange={(e) => buscar(e.target.value)}
          />
        </div>
        <div className="coctel--container">
          {search?.length === 0 ? noMatch : coctel}
        </div>
      </div>
    </>
  );
};

export default Search;
