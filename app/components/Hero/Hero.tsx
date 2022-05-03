const Hero = () => (
  <section className="h-screen flex items-center">
    <div className="space-y-8">
      <div>
        <div className="ml-2 lg:ml-4">
          <span className="text-purple-900 text-lg font-inconsolata dark:text-white">
            Hi, my name is
          </span>
        </div>
        <div className="lg:-ml-4">
          <h1 className="text-6xl lg:text-8xl text-pink-700 dark:text-pink-500 font-poppins font-bold uppercase saturate-150 tracking-tight">
            James McKenzie.
          </h1>
        </div>
        <div className="ml-1 lg:ml-2 ">
          <h2 className="text-purple-900 text-xl lg:text-3xl font-poppins font-bold dark:text-white">
            Your Friendly neighbourhood software engineer.
          </h2>
        </div>
      </div>

      <div className="ml-1 lg:ml-2 max-w-2xl">
        <span className="text-zinc-700 text-base dark:text-white">
          I'm a multi-disciplined Software Engineer, currently building the
          future of banking at{" "}
          <a
            className="text-pink-700 dark:text-pink-500 font-bold hover:underline hover:saturate-150 focus:saturate-150 focus:outline-none focus-visible:ring-4  rounded-sm transition-all"
            href="https://www.checkout.com/"
          >
            Checkout.com
          </a>
          . Specialising in modern <strong>front end architecture</strong> and{" "}
          <strong>tooling</strong>, I primarily work in{" "}
          <strong>Typescript</strong>, as well as staying up to date with modern
          application and systems programming in languages such as{" "}
          <strong>Rust</strong> and <strong>Golang</strong>.
        </span>
      </div>

      <div className="ml-1 lg:ml-2">
        <a
          href="mailto:hello@jamesmckenzie.io"
          className="font-inconsolata shadow-lg shadow-pink-400/50 border-2 border-purple-700 rounded px-4 py-2 text-lg uppercase text-purple-700 hover:text-white focus:text-white hover:bg-purple-700 focus:bg-purple-700 transition-colors hover:saturate-150 inline-block cursor-pointer outline-offset-4 dark:border-white dark:hover:border-pink-500 dark:focus:border-pink-500 dark:text-white dark:shadow-pink-700/50 dark:hover:bg-pink-500 dark:focus:bg-pink-500 focus:outline-none focus-visible:ring-4 "
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
