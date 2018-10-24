import React from "react";
import { css } from "emotion";

const borderWidth = 20;

const FullScreenBorder = ({ children }) => (
  <div
    className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - ${borderWidth * 2}px);
      width: calc(100vw - ${borderWidth * 2}px);

      border: 20px solid green;
      // border-image-source: linear-gradient(#3ec8ac, #4e90a4);

      border-image-source: url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18dcdd4e1c2627bc3c9bf68645c9ae92&auto=format&fit=crop&w=2550&q=80");
      border-image-slice: 20;
      border-width: ${borderWidth}px;
    `}
  >
    {children}
  </div>
);

export default FullScreenBorder;
