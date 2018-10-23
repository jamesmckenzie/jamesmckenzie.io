import React from "react";
import { css } from "emotion";
import { media } from "../helpers/css";

// const borderWidth = 15;

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

      font-weight: 100;
      font-size: 50rem;
      font-family: Lato, arial, helvetica;

      font-size: 6rem;
      ${media.phone`font-size: 5rem`};
      text-align: center;
      margin: 0 20px !important;
      padding: 5px 8px;

      letter-spacing: -5px;
    `}
  >
    {children}
  </h1>
);

export default KnockoutText;
