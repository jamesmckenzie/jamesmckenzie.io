import React from "react";
import { css } from "emotion";
import { media } from "../helpers/css";

// const borderWidth = 15;

const KnockoutText = ({ children }) => (
  <h1
    className={css`
      background: url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18dcdd4e1c2627bc3c9bf68645c9ae92&auto=format&fit=crop&w=2550&q=80")
        center;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;

      font-weight: 900;
      font-family: Lato, arial, helvetica;
      font-size: 6rem;
      letter-spacing: -5px;
      ${media.phone`font-size: 5rem`};
      text-transform: lowercase;

      padding: 15px 8px;
    `}
  >
    {children}
  </h1>
);

export default KnockoutText;
