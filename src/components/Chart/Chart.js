import React, { Fragment } from "react";
import Card from "../UI/Card";
import styled from "styled-components";
import ChartBar from "./ChartBar";
const BarChart = styled.div`
  padding: 1rem;
  border-radius: 12px;
  width: 50rem;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  .Cals {
    color: black;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 23px;
  }
`;
const Chart = (props) => {
  const datapointVals = props.dataSet.map((data) => data.value);
  const maximum = Math.max(...datapointVals);
  console.log(maximum);
  const Cals = props.dataSet.shift();
  return (
    <BarChart>
      <div className="Cals">
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
    </BarChart>
  );
};

export default Chart;
