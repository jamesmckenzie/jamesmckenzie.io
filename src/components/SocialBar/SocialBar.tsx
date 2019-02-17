import React from "react";
import { Box, Flex, Link } from "rebass";
import styled from "styled-components";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

const Absolute = styled(Flex)`
  position: absolute;
  right: 20px;
  /* top: 60px; */
  height: 100vh;
  z-index: 1;
`;

const SocialLink = styled(Link)`
  color: white;
`;

SocialLink.defaultProps = {
  mb: 3,
  as: "a"
};

const SocialBar = () => (
  <Absolute flexDirection="row" justifyContent="center" mt={3}>
    <Box mx={2}>
      <SocialLink href="https://github.com/jamesmckenzie">
        <IoLogoGithub size="2.5em" />
      </SocialLink>
    </Box>
    <Box mx={2}>
      <SocialLink href="https://twitter.com/jmc_kenzie">
        <IoLogoTwitter size="2.5em" />
      </SocialLink>
    </Box>
    <Box mx={2}>
      <SocialLink href="https://www.linkedin.com/in/james-mckenzie-10975314/">
        <IoLogoLinkedin size="2.5em" />
      </SocialLink>
    </Box>
  </Absolute>
);

export default SocialBar;
