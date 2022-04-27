import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const SocialBar = () => (
  <div className="text-pink-700 dark:text-white flex space-x-8 items-center ml-2 lg:ml-4 absolute mt-20">
    <a
      className="hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all"
      href="https://github.com/jamesmckenzie"
      aria-label="View James McKenzie's Github page"
    >
      <FiGithub size="2.5em" />
    </a>
    <a
      className="hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition"
      href="https://twitter.com/jmc_kenzie"
      aria-label="View James McKenzie's Twitter profile"
    >
      <FiTwitter size="2.5em" />
    </a>
    <a
      className="hover:saturate-150 focus:saturate-150 dark:hover:text-pink-500 dark:focus:text-pink-500 transition-all"
      href="https://www.linkedin.com/in/james-mckenzie-10975314/"
      aria-label="View James McKenzie's LinkedIn profile"
    >
      <FiLinkedin size="2.5em" />
    </a>
  </div>
);

export default SocialBar;
