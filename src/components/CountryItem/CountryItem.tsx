import React from "react";
import { Color } from "../../types";
import Badge from "../Badge/Badge";
import { ICountry } from "../../types/index";

const CountryItem = ({
  name,
  region,
  capital,
  flag,
  area,
  population,
}: ICountry) => {
  return (
    <li className={"CountryItem list-group-item d-flex  align-items-center  row"}>
      <span className="countries_flag col"><img className="countries_flag--img" width="100px" src={flag} alt={flag} /></span>
      <span className="countries_name col fw-bold">{name}</span>
      <span className="countries_region col fw-bold">{region}</span>
      <span className="counties_capital col fw-bold">{capital}</span>

      <Badge
        type={"area"}
        color={Color.Primary}
        value={area}
      />
      <Badge
        type={"population"}
        color={Color.Secondary}
        value={population}
      />
    </li>
  );
};

export default CountryItem;
