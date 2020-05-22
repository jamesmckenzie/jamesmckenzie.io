import React from "react";
import { Box, Flex, Text } from "rebass";
import Img from "gatsby-image";
import styled from "styled-components";
import {
  ReactIcon,
  NodeIcon,
  TypescriptIcon,
  JavascriptIcon,
  ReduxIcon,
  SassIcon,
} from "../DevIcons";

const StyledImg = styled(Img)`
  border-radius: 50%;
`;

const AboutMe: React.FunctionComponent<any> = ({ image }) => (
  <Box px={4} mt={4} mb={5}>
    <Flex flexDirection={["column", "row"]} alignItems="center">
      <Box width={[7 / 8, 1 / 3, 1 / 3]} px={[5, 0, 4, 5]} mb={4}>
        <StyledImg fluid={image.childImageSharp.fluid} />
      </Box>
      <Box
        width={[1, 2 / 3, 2 / 3]}
        px={[2, 4, 3]}
        py={4}
        ml={[0, 4, 0]}
        css={`
          box-shadow: 0 20px 25px 5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        `}
      >
        <Box mb={4}>
          <Text
            as="h2"
            fontFamily="Neuton, serif"
            fontWeight={800}
            fontSize={[5, 6]}
            textAlign="center"
            color="#2f2f2f"
          >
            About Me
          </Text>
        </Box>
        <Text
          fontSize={3}
          color="#2f2f2f"
          as="p"
          fontFamily="Raleway, sans-serif"
          lineHeight={1.6}
          px={[3, 3, 5]}
        >
          I'm a multi-disciplined Software Engineer, currently building the
          future of banking at Checkout.com.
        </Text>
        <Flex justifyContent="center">
          <Flex width={[3 / 4, 3 / 4, 1 / 2]} mt={4}>
            <Box width={[1]} mx={[1, 2]}>
              <JavascriptIcon />
            </Box>
            <Box width={[1]} mx={[1, 2]}>
              <TypescriptIcon />
            </Box>
            <Box width={[1]} mx={[1, 2]}>
              <NodeIcon />
            </Box>
            <Box width={[1]} mx={[1, 2]}>
              <ReactIcon />
            </Box>
            <Box width={[1]} mx={[1, 2]}>
              <ReduxIcon />
            </Box>
            <Box width={[1]} mx={[1, 2]}>
              <SassIcon />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </Box>
);

export default AboutMe;
