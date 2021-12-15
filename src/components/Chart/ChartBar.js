import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 100%;
  width: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Fill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
  height: 50%;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <Bar>
      <Inner>
        <Fill style={{ height: barFillHeight }}></Fill>
      </Inner>
      <Label>{props.label}</Label>
    </Bar>
  );
};

export default ChartBar;
