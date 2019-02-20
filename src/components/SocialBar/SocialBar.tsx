import React from "react";
import { Box, Flex, Link } from "rebass";
import styled from "styled-components";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

const Absolute = styled(Flex)`
  position: absolute;
  right: 20px;
  height: 100vh;
  z-index: 1;
`;

const SocialLink = styled(Link)`
  color: white;
`;

const SocialBar = () => (
  <Absolute flexDirection="row" justifyContent="center" mt={3}>
    <Box mx={2}>
      <SocialLink
        href="https://github.com/jamesmckenzie"
        aria-label="View James McKenzie's Github page"
      >
        <IoLogoGithub size="2.5em" />
      </SocialLink>
    </Box>
    <Box mx={2}>
      <SocialLink
        href="https://twitter.com/jmc_kenzie"
        aria-label="View James McKenzie's Twitter profile"
      >
        <IoLogoTwitter size="2.5em" />
      </SocialLink>
    </Box>
    <Box mx={2}>
      <SocialLink
        href="https://www.linkedin.com/in/james-mckenzie-10975314/"
        aria-label="View James McKenzie's LinkedIn profile"
      >
        <IoLogoLinkedin size="2.5em" />
      </SocialLink>
    </Box>
  </Absolute>
);

export default SocialBar;
