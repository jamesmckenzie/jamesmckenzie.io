import React from "react";
import { Box, Flex, Text } from "rebass";
import Img from "gatsby-image";

const AboutMe = ({ image }) => (
  <Box bg="#fdfdfd">
    <Box py={5}>
      <Text
        as="h2"
        fontFamily="Neuton, serif"
        fontWeight="800"
        fontSize={[60]}
        textAlign="center"
        color="#2f2f2f"
        // my={5}
      >
        About Me
      </Text>
    </Box>
    <Flex>
      <Box  width={1 / 3} p={3}>
        <Img fluid={image.childImageSharp.fluid} />
      </Box>
      <Box  width={2 / 3} py={3} px={5}>
        <Text
          fontSize={3}
          color="#2f2f2f"
          as="p"
          fontFamily="Raleway, sans-serif"
          lineHeight={1.6}
        >
          I'm a multi-disciplined Software Engineer, currently building cool
          stuff at JustGiving. Lorem ipsum dolor amet la croix enamel pin XOXO,
          plaid fixie mumblecore hella locavore. Artisan viral small batch,
          cloud bread mustache letterpress kombucha. Readymade blog beard
          cardigan farm-to-table 90's hell of intelligentsia shaman cred
          pinterest. Portland offal pop-up readymade semiotics. Franzen lyft
          selvage offal, aesthetic tbh heirloom. Locavore flannel offal,
          brooklyn fixie letterpress kickstarter kale chips paleo cornhole.
          Schlitz authentic godard skateboard kinfolk.
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default AboutMe;
