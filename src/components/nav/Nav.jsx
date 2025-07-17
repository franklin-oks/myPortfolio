import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FiMoon } from "react-icons/fi";
import { IoSunnySharp } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import { navLinks, socialLinks } from "../../utils/data";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const [darkMode, setdarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleMode = () => {
    const newMode = !darkMode;
    setdarkMode(newMode);
    localStorage.setItem("theme", JSON.stringify(newMode));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full bg-neutral-100 text-neutral-900 lg:py-4 lg:px-30 z-10 py-2 px-4 fixed top-0 right-0 left-0 dark:bg-neutral-900 dark:text-neutral-100"
    >
      <div className="flex justify-between items-center mt-3">
        <div className="flex justify-center items-center ml-[-1rem]">
          <img
            src={logo}
            alt="logo"
            className="w-18 h-18 mr-[-1rem] sm:w-20 sm:h-20 lg:w-25 lg:h-25"
          />
          <h1 className="text-neutral-900  dark:text-white font-bold text-xl sm:text-4xl md:text-3xl lg:text-4xl">
            Franklin Okeke
          </h1>
        </div>

        <div className="flex space-x-10 md:space-x-6 lg:space-x-12">
          <ul
            className="hidden md:flex lg:text-2xl justify-center items-center space-x-10 md:space-x-4 lg:spce-x-18 lg:gap-5"
            s
          >
            {navLinks.map(({ label, target }) => (
              <Link
                key={target}
                to={target}
                smooth={true}
                duration={3000}
                offset={-20}
                className="cursor-pointer relative text-neutral-900 dark:text-white hover:text-orange-400 transition-colors duration-300 after:content-[''] after:block after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {label}
              </Link>
            ))}

            <Link
              to="contact"
              smooth={true}
              duration={3000}
              offset={-20}
              className="border-2 p-2 shadow-2xl rounded-xl font-bold border-neutral-900 animate-bounce cursor-pointer dark:border-neutral-100 dark:text-white"
            >
              Contact
            </Link>
          </ul>

          <button
            className="w-9 h-9 sm:w-12  sm:h-12 rounded-lg border-2 border-neutral-900 flex justify-center items-center  text-neutral-900 shadow-lg transition-colors cursor-pointer dark:bg-neutral-900 dark:text-neutral-100 dark:border-2 dark:border-neutral-100"
            onClick={toggleMode}
          >
            {darkMode ? (
              <IoSunnySharp className="text-lg sm:text-3xl  lg:text-2xl" />
            ) : (
              <FiMoon className="text-lg sm:text-3xl  lg:text-2xl" />
            )}
          </button>
        </div>
        <div
          className="md:hidden sm:w-12  sm:h-12 flex justify-center items-center sm:mr-12  cursor-pointer w-9 h-9 lg:w-10 lg:h-10 rounded-lg border-2 border-neutral-900 text-neutral-900 shadow-lg transition-colors dark:bg-neutral-900 p-1 dark:text-neutral-100 dark:border-neutral-100"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <FaXmark size={25} /> : <GiHamburgerMenu size={25} />}
        </div>
      </div>
      <AnimatePresence>
        {openNav && (
          <div className="md:hidden z-10 absolue top-12 w-full flex flex-col ml-25">
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.4 }}
              className="bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 mb-8 pb-7  py-15 text-3xl flex flex-col space-y-8"
            >
              {navLinks.map(({ label, target }) => (
                <Link
                  key={target}
                  to={target}
                  smooth={true}
                  duration={4000}
                  offset={-70}
                  onClick={() => setOpenNav(!openNav)}
                  className="cursor-pointer relative text-neutral-900 dark:text-white hover:text-orange-400 transition-colors duration-500 after:content-[''] after:block after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left w-20"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="youtube"
                smooth={true}
                duration={3000}
                offset={-20}
                onClick={() => setOpenNav(!openNav)}
                className="cursor-pointer relative text-neutral-900 dark:text-white hover:text-orange-400 transition-colors duration-500 after:content-[''] after:block after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left w-20"
              >
                YouTube
              </Link>
              <Link
                to="education"
                smooth={true}
                duration={3000}
                offset={-20}
                onClick={() => setOpenNav(!openNav)}
                className="cursor-pointer relative text-neutral-900 dark:text-white hover:text-orange-400 transition-colors duration-500 after:content-[''] after:block after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left w-20"
              >
                Education
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer relative text-neutral-900 dark:text-white hover:text-orange-400 transition-colors duration-300 after:content-[''] after:block after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left w-30"
                onClick={() => setOpenNav(!openNav)}
              >
                Contact
              </Link>
            </motion.ul>
            <div className="flex text-3xl mb-10 space-x-6 text-neutral-900 dark:text-white">
              {socialLinks.map(({ id, link, target, rel, icon: Icon }) => (
                <a
                  key={id}
                  href={link}
                  target={target}
                  rel={rel}
                  className="hover:text-orange-400 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
