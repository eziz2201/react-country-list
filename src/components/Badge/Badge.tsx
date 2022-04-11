import React from "react";
import { IBadge } from "../../types";

const Badge = ({ type, color, value, textColor }: IBadge) => {
  return (
    <span
      className={`Badge bg-${color} text-${textColor} fw-bold rounded col ms-1 `}
    >
      {type}: {value}
    </span>
  );
};

export default Badge;
