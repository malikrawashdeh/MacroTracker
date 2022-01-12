import React from "react";
import ChartBar from "./ChartBar";
import classes from "./Chart.module.css";

const Chart = (props) => {
  const datapointVals = props.dataSet.map((data) => data.value);
  const maximum = Math.max(...datapointVals);
  console.log(maximum);
  const Cals = props.dataSet.shift();
  return (
    <div className={classes.chart}>
      <div className={classes.Cals}>
        <b>Total Calories:</b> {Cals.value}
      </div>

      {props.dataSet.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
