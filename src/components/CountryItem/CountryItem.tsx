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
    <li className={`countryList_item row align-items-center  border pe-2`}>
      <span className="countryList_country col fw-bold">
        <img
          className="countryList_flag me-3"
          width="120px"
          height="80px"
          src={flag}
          alt={flag}
        />
        {name}
      </span>

      <span className="countryList_text col row fw-bold">
        <span className="countryList_region col ">{region}</span>
        <span className="countryList_capital col ">{capital}</span>
      </span>

      <span className="countryList_badge col col-xs-5 row">
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
      </span>
    </li>
  );
};

export default CountryItem;
