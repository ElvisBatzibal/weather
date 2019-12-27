import React from "react";
import styled from "@emotion/styled";

const Condition = props => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 200;
  `;

  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;

  return (
    <>
      <Temp>20 *C</Temp>
      <State>Clouds</State>
    </>
  );
};

export default Condition;
