import React from "react";
import { css } from "emotion";
import { media } from "../helpers/css";

// const borderWidth = 15;

const KnockoutText = ({ children }) => (
  <h1
    className={css`
      background: url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18dcdd4e1c2627bc3c9bf68645c9ae92&auto=format&fit=crop&w=2550&q=80")
        center;

      // background: #74ebd5;
      // background: -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%),
      //   -webkit-linear-gradient(left, #3ec8ac 0%, #4e90a4 100%);
      // background: linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%),
      //   linear-gradient(to right, #3ec8ac 0%, #4e90a4 100%);
      color: red;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;

      font-weight: 900;
      font-family: Lato, arial, helvetica;
      font-size: 6rem;
      letter-spacing: -5px;
      ${media.phone`font-size: 5rem`};
      text-transform: lowercase;

      // text-align: center;
      // margin: 0 20px !important;
      padding: 15px 8px;
    `}
  >
    {children}
  </h1>
);

export default KnockoutText;
