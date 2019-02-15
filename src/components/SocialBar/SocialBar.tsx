import React from "react";
import { Box, Flex, Link } from "rebass";
import styled from "styled-components";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";

const Absolute = styled(Flex)`
  position: absolute;
  right: 20px;
  /* top: 60px; */
  height: 100%;
`;

const SocialLink = styled(Link)`
  color: white;
`;

SocialLink.defaultProps = {
  mb: 3,
  as: "a"
};

const SocialBar = () => (
  <Absolute flexDirection="column" justifyContent="center">
    <SocialLink href="https://github.com/jamesmckenzie">
      <IoLogoGithub size="2.5em" />
    </SocialLink>
    <SocialLink href="https://twitter.com/jmc_kenzie">
      <IoLogoTwitter size="2.5em" />
    </SocialLink>
    <SocialLink href="https://www.linkedin.com/in/james-mckenzie-10975314/">
      <IoLogoLinkedin size="2.5em" />
    </SocialLink>
  </Absolute>
);

export default SocialBar;
