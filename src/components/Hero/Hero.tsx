import React from "react";
import styled, { css, keyframes } from "styled-components";
import FadeIn from "../FadeIn";
import { Flex, Box, Text } from "rebass";
import { media } from "../../helpers/css";

const Background = styled(Box)`
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  transform: skewY(-6deg);
  transform-origin: top left;
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const waveAnimation = keyframes`
    0%{
        transform: rotate(0deg);
        }
    2%{
        transform: rotate(-10deg);
        }
    4%{
        transform: rotate(20deg);
        }
    6%{
        transform: rotate(-10deg);
        }
    8%{
        transform: rotate(20deg);
        }
    10%{
        transform: rotate(0deg);
        }
`;

const fontSizes = [50, 80, 100, 120];

const Hero = () => (
  <Box
    css={css`
      position: relative;
    `}
  >
    <Background />
    <FadeIn duration={1}>
      <Flex
        justifyContent="center"
        alignItems="center"
        css={css`
          height: 122vh;
          min-height: 830px;
          ${media.desktop`
            min-height: 500px;
          `}
        `}
      >
        <Box>
          <Text
            as="p"
            fontFamily="Raleway, sans-serif"
            fontSize={fontSizes.map(s => s * 0.3)}
            fontWeight="300"
            color="white"
            letterSpacing={-1}
            mb={[-2]}
          >
            Hello, I'm
          </Text>
          <Text
            as="h1"
            fontFamily="Neuton, serif"
            fontWeight="800"
            fontSize={fontSizes}
            color="white"
          >
            James McKenzie.
          </Text>
          <Text
            as="p"
            fontFamily="Raleway, sans-serif"
            fontSize={fontSizes.map(s => s * 0.5)}
            fontWeight="300"
            color="white"
            mt={4}
            letterSpacing={-1}
          >
            <Flex
              alignItems={["start", "center"]}
              flexDirection={["column", "row"]}
              justifyContent="center"
            >
              <Text mb={[2, 0]}>
                A
                <Text
                  mx={2}
                  as="span"
                  bg="white"
                  color="#2f80ed"
                  p={3}
                  css={css`
                    border-radius: 6px;
                  `}
                  lineHeight={1}
                >
                  <i>software developer</i>
                </Text>{" "}
              </Text>
              <Text mt={[3, 0]}>from London</Text>
            </Flex>
            <Text
              as="p"
              textAlign={["center"]}
              fontSize={fontSizes.map(s => s * 0.5)}
              mt={[4, 5, 6, 6]}
              css={css`
                animation: ${waveAnimation} 7s infinite 3s linear;
              `}
            >
              👋
            </Text>
          </Text>
        </Box>
      </Flex>
    </FadeIn>
  </Box>
);

export default Hero;
