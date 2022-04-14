import React from "react";
import { IBadge, Color } from "../../types";

const Badge = ({ type, color, value }: IBadge) => {
  return (
    <span
      className={`Badge col bg-${color} text-${Color.Light} fw-bold rounded ms-1 me-1`}
    >
      {type}: {value}
    </span>
  );
};

export default Badge;
