import React from "react";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { graphql } from "gatsby";
import AboutMe from "../components/AboutMe/AboutMe";
import styled from "styled-components";

const Angle = styled.svg`
  margin-top: -150vh;
`;

const HomePage: React.FunctionComponent = ({ data }: any) => {
  console.log(data.fileName.childImageSharp);
  return (
    <Layout>
      <Hero />
      <AboutMe image={data.fileName} />
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  {
    fileName: file(relativePath: { eq: "Image from iOS.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
