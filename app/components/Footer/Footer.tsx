import React from "react";
import {
  ReactIcon,
  NodeIcon,
  TypescriptIcon,
  JavascriptIcon,
  ReduxIcon,
  SassIcon,
} from "../DevIcons";

const IconWrapper = ({ children }: any) => {
  return <div className="w-16 h-16">{children}</div>;
};

const Footer = () => (
  <footer className="mx-auto px-8 lg:px-16 py-8 bg-white shadow-2xl shadow-pink-800 z-1">
    <div className="max-w-lg m-auto">
      <p className="text-center">
        I'm a multi-disciplined engineering leader, currently building the
        future of inclusive global finance at{" "}
        <a href="https://www.nsave.com/">nsave</a>. Specialising in
        distributed systems, platform engineering and event-driven architecture,
        I primarily work in TypeScript and Node.js, while continuing to explore
        modern systems languages such as Rust and Go.
      </p>
    </div>
    <div className="flex py-8 flex-wrap content-center justify-center space-x-4">
      <IconWrapper>
        <JavascriptIcon />
      </IconWrapper>
      <IconWrapper>
        <TypescriptIcon />
      </IconWrapper>
      <IconWrapper>
        <NodeIcon />
      </IconWrapper>
      <IconWrapper>
        <ReactIcon />
      </IconWrapper>
      <IconWrapper>
        <ReduxIcon />
      </IconWrapper>
      <IconWrapper>
        <SassIcon />
      </IconWrapper>
    </div>
  </footer>
);

export default Footer;
