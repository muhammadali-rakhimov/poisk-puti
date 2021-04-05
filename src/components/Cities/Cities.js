import React from "react";
import Accordions from "./Accordions/Accordions";
import cities from "./Cities.module.css";

const Cities = () => {
  return (
    <div className={cities.cities}>
      <Accordions />
    </div>
  );
};

export default Cities;
