import React, { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { IoSunnySharp } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";

const Hero2 = () => {
  const [darkMode, setdarkMode] = useState(false);

  const toggleMode = () => {
    setdarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-full min-h-screen dark:bg-neutral-950 transition-colors duration-700 p-4 bg-neutral-100 relative">
      <div className="absolute -z-10 inset-0">
        <div
          className="absolute inset-0 dark:hidden "
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        ></div>
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <button
        className="fixed top-3 right-3 lg:top-4 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 rounded-lg border-2 border-neutral-900 flex justify-center items-center  text-neutral-950 shadow0-lg transition-colors cursor-pointer dark:bg-neutral-900 dark:text-neutral-100 dark:border-2 dark:border-neutral-100"
        onClick={toggleMode}
      >
        {darkMode ? (
          <IoSunnySharp className="text-lg lg:text-2xl" />
        ) : (
          <FiMoon className="text-lg lg:text-2xl" />
        )}
      </button>

      <div className="flex space-x-6 justify-center mt-48 items-center">
        <button className="px-8 py-4 animate-bounce border-1 text-2xl font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-neutral-100">
          Hire Me
        </button>
        <button className="px-8 animate-pulse py-4 border-1 text-2xl font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-neutral-100">
          Contact Me
        </button>
      </div>
      {/* dynamic about me */}
      <div className="text-center mt-10 text-white text-2xl sm:text-4xl font-bold">
        <h1 className="text-neutral-900 dark:text-neutral-100">
          Hi, I am Franklin Okeke
        </h1>
        <span className="text-orange-400">
          <Typewriter
            words={[
              "Frontend Developer",
              "Backend Developer",
              "Freelancer",
              "Electrical Engr.",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </div>
  );
};

export default Hero2;
