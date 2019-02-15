import React from "react";
import GlobalStyle from "../GlobalStyle";
import { SocialBar } from "../SocialBar";

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <GlobalStyle />
    <SocialBar />
    {children}
  </>
);

export default Layout;
