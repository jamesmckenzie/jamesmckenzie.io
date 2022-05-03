import React from "react";
import { Hero } from "../components/Hero";
import { SocialBar } from "~/components/SocialBar";
import DarkModeToggle from "~/components/DarkModeToggle";

const HomePage: React.FunctionComponent = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-100 via-purple-200 to-blue-200 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900">
      <div className="animate-fade relative px-8 lg:px-32">
        <section className="flex w-full justify-between h-20 py-4">
          <SocialBar />
          <div className="">
            <DarkModeToggle></DarkModeToggle>
          </div>
        </section>
        <div className="-mt-20">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
