import React from "react";
import { Link } from "react-router-dom";
import countriesJson from "../data/countries.json";

function HomePage({ handleCountrySelected }) {
  return (
    <>
      <h2>WikiCountries: Tu Guía para el Mundo</h2>
      <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Tu Guía para el Mundo</h1>

        {countriesJson.map((country) => (
          <div className="list-group" key={country._id}>
            <Link className="list-group-item list-group-item-action" to={`/${country._id}`} name={country.name.official} onClick={() => handleCountrySelected(country)}>
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;


