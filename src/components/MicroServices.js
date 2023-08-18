import React from "react";
import { MICRO_SERVICES } from "../constants/appConstants";

const MicroServices = () => {
  return (
    <div className="ms-item-wrapper">
      {MICRO_SERVICES.map((item) => (
        <div
          key={item.id}
          className="ms-comp-items"
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

export default MicroServices;
