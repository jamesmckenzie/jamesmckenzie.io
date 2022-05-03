import React from "react";
import Background from "../Backround";
import Header from "../Header";

const Layout: React.FunctionComponent = ({ children }) => (
  <Background>
    <div className="relative px-8 lg:px-32">
      <section className="flex w-full justify-between h-20 py-4">
        <Header />
      </section>
      {children}
    </div>
  </Background>
);

export default Layout;
