import React from "react";
import GlobalStyle from "../GlobalStyle";
import { SocialBar } from "../SocialBar";
import { Box, Text } from "rebass";
import { css } from "styled-components";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

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
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: { title, description, siteUrl }
        }
      }) => (
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="Description" content={description} />
          <title>{`${title} | Home`}</title>
          <link rel="canonical" href={siteUrl} />
        </Helmet>
      )}
    />
    <GlobalStyle />
    <SocialBar />
    {children}
    <Footer />
  </Box>
);

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

export default Layout;
