import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { SERIES, OPTIONS } from "./../constants/appConstants";

const ApexChart = () => {
  return (
    <div id="chart">
      <ReactApexChart
        options={OPTIONS}
        series={SERIES}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
