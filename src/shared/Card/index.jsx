import React from "react";

import "./styles.css";

export const Card = ({
  children,
  selected,
  className = "",
  onClick = () => {},
}) => (
  <div
    onClick={onClick}
    className={`card ${className} ${selected ? "card-selected" : ""}`}
  >
    {children}
  </div>
);
