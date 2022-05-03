import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import DarkModeToggle from "../DarkModeToggle";

const SocialBar = () => (
  <div className="flex space-x-8 text-pink-700 dark:text-white ">
    <a
      className="hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all focus:outline-none focus-visible:ring-4  rounded-lg p-0.5"
      href="https://github.com/jamesmckenzie"
      aria-label="View James McKenzie's Github page"
    >
      <FiGithub size="2.5em" />
    </a>
    <a
      className="hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition focus:outline-none focus-visible:ring-4  rounded-lg p-0.5"
      href="https://twitter.com/jmc_kenzie"
      aria-label="View James McKenzie's Twitter profile"
    >
      <FiTwitter size="2.5em" />
    </a>
    <a
      className="hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all focus:outline-none focus-visible:ring-4  rounded-lg p-0.5"
      href="https://www.linkedin.com/in/james-mckenzie-10975314/"
      aria-label="View James McKenzie's LinkedIn profile"
    >
      <FiLinkedin size="2.5em" />
    </a>
  </div>
);

export default SocialBar;
