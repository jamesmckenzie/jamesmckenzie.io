import { NavLink, NavLinkProps } from "@remix-run/react";
import DarkModeToggle from "../DarkModeToggle";
import { SocialBar } from "../SocialBar";

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
  return (
    <div className="flex justify-between space-x-8 items-center w-full">
      <div className="space-x-2">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
      </div>
      <div className="flex space-x-8">
        <SocialBar />
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Header;
