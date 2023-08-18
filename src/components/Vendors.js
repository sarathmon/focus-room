import React from "react";
import { VENDORS } from "../constants/appConstants";

const Vendors = () => {
  return (
    <div className="item-wrapper">
      {VENDORS.map((item) => (
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

export default Vendors;
