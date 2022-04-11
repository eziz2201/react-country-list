import React from "react";
import CountryList from "./components/CountryList/CountryList";
import countryData from "./country-data.json";
import { ICountry } from "./types";

function App() {
  const countries: ICountry[] = countryData.map((country) => ({
    name: country.name.common,
    region: country.region,
    capital: country.capital[0],
    flag: country.flags.svg,
    area: country.area,
    population: country.population,
  }));

  return (
    <div className="App container">
      <h1 className="countryList_title">Country List</h1>
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
