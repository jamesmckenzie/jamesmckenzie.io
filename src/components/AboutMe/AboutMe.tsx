import React from "react";
import { Box, Flex, Text } from "rebass";
import Img from "gatsby-image";

const AboutMe = ({ image }) => (
  <Box px={4} mt={4} mb={5}>
    <Box mb={4}>
      <Text
        as="h2"
        fontFamily="Neuton, serif"
        fontWeight="800"
        fontSize={[60]}
        textAlign="center"
        color="#2f2f2f"
      >
        About Me
      </Text>
    </Box>
    <Flex flexDirection={["column", "column", "row"]}>
      <Box width={[1, 1, 1 / 3]} px={[3, 5, 2, 4]}>
        <Img fluid={image.childImageSharp.fluid} />
      </Box>
      <Box width={[1, 1, 2 / 3]} px={[2, 4, 3]} my={4}>
        <Text
          fontSize={3}
          color="#2f2f2f"
          as="p"
          fontFamily="Raleway, sans-serif"
          lineHeight={1.6}
        >
          <p>
            I'm a multi-disciplined Software Engineer, currently building cool
            stuff at JustGiving. I enjoy solving interesting problems with
            occasionally novel solutions and understand that the best answer
            isn't always the prettiest.
          </p>{" "}
          <br />
          <p>
            Current stack:
            <li>Typescript</li>
            <li>React</li>
            <li>Nodejs</li>
          </p>
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default AboutMe;
