import React from "react";
import { css } from "emotion";
import { Link } from "gatsby";
import "./reset.css";
import FullScreenBorder from "../components/FullScreenBorder";
import KnockoutText from "../components/KnockoutText";

const borderWidth = 15;

export default () => (
  <FullScreenBorder>
    <KnockoutText>James McKenzie.</KnockoutText>
  </FullScreenBorder>
);
