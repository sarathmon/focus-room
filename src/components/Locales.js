import React from "react";
import { LOCALE } from "../constants/appConstants";

const Locales = () => {
  return (
    <div className="loc-item-wrapper">
      {LOCALE.map((item) => (
        <div
          key={item.id}
          className="comp-items"
          style={{
            backgroundColor: item.isHealthy ? "#000000" : "#F23A3A",
            color: item.isHealthy ? "#cacaca" : "#000000",
          }}
        >
          <div className="comp-items-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Locales;
