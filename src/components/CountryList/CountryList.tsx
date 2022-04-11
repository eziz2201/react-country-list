import React from "react";
import CountryItem from "../CountryItem/CountryItem";
import  {ICountry}  from "../../types/index";

const CountryList: React.FC<{countries:ICountry[]}> = ({countries}) => {
  console.log(countries);
  return (
    <ul className="CountryList list-group ">
      {countries.map((country) => (
        <CountryItem key={country.name} {...country} />
      ))}
    </ul>
  );
};

export default CountryList;
