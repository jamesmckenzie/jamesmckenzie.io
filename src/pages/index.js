import React from "react";
import { css } from "emotion";
import { Link } from "gatsby";
import "./reset.css";
import FullScreenBorder from "../components/FullScreenBorder";
import KnockoutText from "../components/KnockoutText";

const borderWidth = 15;

export default () => (
  <FullScreenBorder>
    <div>
      <KnockoutText>James McKenzie.</KnockoutText>
      <h3
        className={css`
          text-align: right;
          margin-right: 25px;
          font-family: Lato;
          font-weight: bold;
          color: #74ebd5;
        `}
      >
        Software Engineer in London
      </h3>
    </div>
  </FullScreenBorder>
);
