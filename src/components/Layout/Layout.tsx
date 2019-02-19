import React from "react";
import GlobalStyle from "../GlobalStyle";
import { SocialBar } from "../SocialBar";
import { Box, Text } from "rebass";
import { css } from "styled-components";
import { Helmet } from "react-helmet";

const Footer = () => (
  <Box py={3} color="white" bg="whitesmoke" as="footer">
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
    <Helmet>
      <meta charSet="utf-8" />
      <title>James McKenzie | Home</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <GlobalStyle />
    <SocialBar />
    {children}
    <Footer />
  </Box>
);

export default Layout;
