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
      <span className="col">
        <img width="100px" src={flag} alt={flag} />
      </span>
      <span className="col ">{name}</span>
      <span className="col">{region}</span>
      <span className="col ">{capital}</span>

      <Badge
        type={"area"}
        color={Color.Primary}
        value={area}
        textColor={Color.Light}
      />
      <Badge
        type={"population"}
        color={Color.Secondary}
        value={population}
        textColor={Color.Light}
      />
    </li>
  );
};

export default CountryItem;
