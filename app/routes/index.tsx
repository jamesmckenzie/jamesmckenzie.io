import React from "react";
import { Hero } from "../components/Hero";
import { Layout } from "~/components/Layout";

const HomePage: React.FunctionComponent = () => {
  return (
    <Layout>
      <section className="-mt-20 h-screen flex items-center">
        <Hero />
      </section>
    </Layout>
  );
};

export default HomePage;
