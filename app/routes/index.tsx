import React from "react";
import { Hero } from "../components/Hero";
import { SocialBar } from "~/components/SocialBar";
import { ActionFunction, redirect } from "@remix-run/node";
import { colorSchemeCookie, getColorScheme } from "~/cookies";
import DarkModeToggle from "~/components/DarkModeToggle";

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === "light" ? "dark" : "light";

  return redirect(request.url, {
    headers: {
      "Set-Cookie": await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};

const HomePage: React.FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-purple-100 via-purple-200 to-blue-200 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900">
      <div className="animate-fade">
        <div className="absolute w-full justify-between flex px-8 lg:px-32 pt-4 h-20">
          <SocialBar />
          <div className="">
            <DarkModeToggle></DarkModeToggle>
          </div>
        </div>
        <div className="max-w-7xl m-auto px-8 lg:px-32">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
