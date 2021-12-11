import React from "react";
import Chart from "../Chart/Chart";

const MacroChart = (props) => {
  const chartDataPoints = [
    { label: "Calories", value: 0 },
    { label: "Protein", value: 0 },
    { label: "Carbs", value: 0 },
    { label: "Fat", value: 0 },
  ];
  for (const food of props.foods) {
    chartDataPoints[0].value += food.calories;
    console.log(chartDataPoints[0].value);
    chartDataPoints[1].value += food.protein;
    chartDataPoints[2].value += food.carbs;
    chartDataPoints[3].value += food.fat;
  }

  return <Chart dataSet={chartDataPoints} />;
};

export default MacroChart;
