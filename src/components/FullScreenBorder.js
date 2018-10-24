import React from "react";
import { css } from "emotion";

const borderWidth = 20;

const FullScreenBorder = ({ children }) => (
  <div
    className={css`
      height: calc(100vh);
      width: calc(100vw);
      background: url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=18dcdd4e1c2627bc3c9bf68645c9ae92&auto=format&fit=crop&w=2550&q=80")
        center;
      border-width: ${borderWidth}px;
    `}
  >
    <div
      className={css`
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: ${borderWidth}px;
        left: ${borderWidth}px;
        background-color: white;
        height: calc(100vh - ${borderWidth * 2}px);
        width: calc(100vw - ${borderWidth * 2}px);
      `}
    >
      {children}
    </div>
  </div>
);

export default FullScreenBorder;
