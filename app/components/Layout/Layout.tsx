import React from "react";
import AboutMe from "../Footer/Footer";
import { SocialBar } from "../SocialBar";

const Footer = () => (
  <footer className="bg-gray-400 py-6 border-solid border-t border-gray-200">
    <AboutMe />
  </footer>
);

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="h-full bg-purple-900">
    <SocialBar />
    {children}
    <Footer />
  </div>
);

export default Layout;
