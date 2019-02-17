import React from "react";
import GlobalStyle from "../GlobalStyle";
import { SocialBar } from "../SocialBar";
import { Box } from "rebass";
import { css } from "styled-components";

const Layout: React.FunctionComponent = ({ children }) => (
  <Box
    css={css`
      position: relative;
    `}
  >
    <Box
      css={css`
        position: absolute;
        height: 100%;
        z-index: -2;
      `}
    />
    <GlobalStyle />
    <SocialBar />
    {children}
  </Box>
);

export default Layout;
