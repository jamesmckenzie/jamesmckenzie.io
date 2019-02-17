import React from "react";
import GlobalStyle from "../GlobalStyle";
import { SocialBar } from "../SocialBar";
import { Box, Text } from "rebass";
import { css } from "styled-components";

const Footer = () => (
  <Box py={3} color="white" bg="#DCDCDC" as="footer">
    <Text fontFamily="Raleway, sans-serif" textAlign="center">
      ❤️
    </Text>
  </Box>
);

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
    <Footer />
  </Box>
);

export default Layout;
