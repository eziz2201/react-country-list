import React from "react";
import { IBadge } from "../../types";

const Badge = ({ type, color, value, textColor }: IBadge) => {
  return (
    <span
      className={`Badge col bg-${color} text-${textColor} fw-bold rounded ms-1 me-1`}
    >
      {type}: {value}
    </span>
  );
};

export default Badge;
