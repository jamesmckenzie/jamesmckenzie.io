import React from "react";
import { css } from "emotion";

const borderWidth = 15;

const KnockoutText = ({ children }) => (
  <h1
    className={css`
      background: #74ebd5;
      background: -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%),
        -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%);
      background: linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%),
        linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%);
      color: red;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      font-weight: bold;
      font-size: 80px;
      font-family: arial, helvetica;
      text-align: center;
      margin: 0 20px !important;
      padding: 5px 8px;

      letter-spacing: -5px;

      border-bottom: solid;
      border-image-source: linear-gradient(#3ec8ac, #4e90a4);
      border-image-slice: 20;
      border-width: ${borderWidth}px;
    `}
  >
    {children}
  </h1>
);

export default KnockoutText;
