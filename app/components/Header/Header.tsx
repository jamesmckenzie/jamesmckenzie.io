import { Link, NavLink } from "@remix-run/react";
import DarkModeToggle from "../DarkModeToggle";
import { SocialBar } from "../SocialBar";

const Header = () => {
  return (
    <>
      <SocialBar />
      <div className="flex space-x-4 items-center">
        <div className="flex space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 transition-all focus:outline-none focus-visible:ring-4 rounded h-[44px] flex items-center hover:bg-gray-200 hover:shadow-inner dark:hover:bg-gray-800  ${
                isActive &&
                "underline underline-offset-4 decoration-pink-700 decoration-4"
              }`
            }
          >
            <span className="text-lg font-bold text-purple-900 dark:text-white">
              Home
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 transition-all focus:outline-none focus-visible:ring-4 rounded h-[44px] flex items-center hover:bg-gray-200 hover:shadow-inner dark:hover:bg-gray-800 ${
                isActive &&
                "underline underline-offset-4 decoration-pink-700 decoration-4"
              }`
            }
          >
            <span className="text-lg font-bold text-purple-900 dark:text-white">
              Contact
            </span>
          </NavLink>
        </div>
        <DarkModeToggle />
      </div>
    </>
  );
};

export default Header;
