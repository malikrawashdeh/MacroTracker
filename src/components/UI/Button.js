import React from "react";
import styled from "styled-components";
const ButtonStyle = styled.button`
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  height: 50%;
  margin: auto;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  font-size: 15px;

  &:hover,
  &:active {
    background-color: #510674;
    border-color: #510674;
  }
`;

const Button = (props) => {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>;
};

export default Button;
