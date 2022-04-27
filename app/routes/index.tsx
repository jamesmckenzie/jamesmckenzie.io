import React from "react";
import { Hero } from "../components/Hero";
import { SocialBar } from "~/components/SocialBar";

const HomePage: React.FunctionComponent = ({ data }: any) => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-100 via-purple-200 to-blue-200 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900">
      <div className="animate-fade max-w-7xl m-auto px-8 lg:px-32">
        <div className="flex justify-between items-center">
          <SocialBar />
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
