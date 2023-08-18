import React from "react";

const CompItemArr = (props) => {
  return (
    <div className={props.wrapperClass}>
      {props.dataArr.map((item) => (
        <div
          key={item.id}
          className={props.itemContainerClass}
          style={{
            backgroundColor: item.isHealthy ? "#000000" : "#F23A3A",
            color: item.isHealthy ? "#cacaca" : "#000000",
          }}
        >
          <div className={props.itemClass}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CompItemArr;
