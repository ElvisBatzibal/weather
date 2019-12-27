import React from "react";
import styled from "@emotion/styled";

const icon = props => {
  const ImageIcon = styled.img`
    width: 80px;
  `;

  return (
    <>
      <ImageIcon
        className="icon"
        src="./img/icon-weather.png"
        alt="Weather Icon"
      ></ImageIcon>
    </>
  );
};
export default icon;
