import { NavLink, NavLinkProps } from "@remix-run/react";
import DarkModeToggle from "../DarkModeToggle";
import { HorizontalSocialBar, VerticalSocialBar } from "../SocialBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <div className="w-screen h-full absolute top-0 left-0 opacity-75 bg-black z-40"></div>
      <div className="w-screen z-50 shadow-lg px-8 py-7 top-0 right-0 fixed h-full flex flex-col items-center">
        <div className="text-purple-900 dark:text-white mb-32">
          <button
            onClick={closeMenu}
            className="text-purple-900 dark:text-white fill-purple-900 dark:fill-white"
          >
            <IoClose size={64} />
          </button>
        </div>
        <VerticalSocialBar />
      </div>
    </>
  );
};

const HeaderLink = ({ children, ...props }: NavLinkProps) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      `font-inconsolata focus:outline-none focus-visible:ring-4 px-4 py-3 dark:hover:bg-gray-800 hover:bg-gray-100 hover:shadow-inner rounded transition-all ${
        isActive &&
        "underline underline-offset-2 decoration-pink-700 decoration-4"
      }`
    }
  >
    <span className=" uppercase text-purple-900 dark:text-white text-lg">
      {children}
    </span>
  </NavLink>
);

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex justify-between space-x-8 items-center w-full">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
        <div className="sm:hidden">
          <DarkModeToggle />
        </div>
      </div>
      {!showSidebar ? (
        <button
          onClick={() => setShowSidebar(true)}
          className="sm:hidden text-purple-900 dark:text-white"
        >
          <GiHamburgerMenu size={24} />
        </button>
      ) : (
        <div className="z-50 sm:hidden text-purple-900 dark:text-white">
          <Menu closeMenu={() => setShowSidebar(false)}></Menu>
        </div>
      )}
      <div className="hidden sm:flex space-x-8 items-center">
        <HorizontalSocialBar />
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
