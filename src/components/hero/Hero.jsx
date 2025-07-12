import { Typewriter } from "react-simple-typewriter";
import logo from "../../assets/me.jpg";
import { FaPlay, FaBell } from "react-icons/fa";
import { socialLinks, AboutText } from "../../utils/data";
import { motion, scale, spring } from "framer-motion";

const Hero = () => {
  return (
    <hearder className="w-full transition-all duration-500 bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col lg:ml-[3rem] lg:mr-[-8rem] lg:mt-[-8rem]  lg:flex-row justify-between items-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="flex flex-col space-y-8"
        >
          <h1 className="text-neutral-900 lg:mt-[11rem] md:text-4xl lg:text-6xl dark:text-white text-2xl sm:mt-12 sm:text-3xl font-bold">
            Helo, I'm <span className="text-orange-400">Franklin Okeke</span>
          </h1>
          <span className="text-orange-400 mt-[-2rem] lg:mt-0 text-2xl lg:text-5xl md:text-3xl font-bold">
            <Typewriter
              words={[
                "Frontend Developer",
                "Backend Developer",
                "Freelancer",
                "Electrical Engineer.",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <p className="text-xl lg:text-2xl md:text-2xl dark:text-gray-300 text-neutral-900 leading-relaxed sm:leading-loose max-w-[60ch]">
            {AboutText.paragraphOne}
          </p>
          <p className="text-xl md:text-2xl md:mt-[-1rem] dark:text-gray-300 text-neutral-900 leading-relaxed sm:leading-loose mt-8 max-w-[60ch] ">
            {AboutText.paragraphTwo}
          </p>
          <div className="flex space-x-8 mt-4 mb-10">
            <button className="px-8  lg:h-18 sm:w-45 md:w-65 md:my-4 md:h-25 sm:text-lg md:text-3xl animate-bounce  py-4  border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-white hover:bg-neutral-600 hover:text-white hover:border-transparent transition-colors duration-500">
              Contact Me
            </button>
            <button className="px-8 sm:w-45 md:w-65 md:my-4 md:text-3xl sm:text-lg py-4 animate-bounce border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-white hover:bg-neutral-600 hover:text-white hover:border-transparent transition-colors duration-500">
              Hire Me
            </button>
          </div>
          <div className="flex md:text-6xl lg:text-2xl  text-4xl mt-[-1rem] ml-4 mb-10 space-x-6 text-neutral-900 dark:text-white">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="flex flex-col  space-y-4 lg:space-x-2"
        >
          <motion.img
            whileHover={{ scale: 0.9 }}
            drag
            transition={{ duration: 0.6, type: spring }}
            src={logo}
            alt="logo"
            className="w-96 h-96 lg:w-130 lg:h-130 lg:mt-[18rem] md:w-180 md:h-180 md:ml-5 sm:w-130 sm:h-130 sm:rounded-3xl sm:ml-6 p-3 object-cover  rounded-2xl shadow-2xl"
          />
          <p className="text-xl md:text-2xl lg:mr-12 lg:text-xl p-3 dark:text-gray-300 text-neutral-900  leading-relaxed sm:leading-loose mt-8 max-w-[60ch]">
            {AboutText.paragraphThree}
            <br />
            <strong className="text-orange-400">Subscriptions are free!</strong>
          </p>
          <div className="flex py-1 md:ml-[-6rem] mb-8 space-x-6 sm:space-x-12 justify-center md:mt-2 mt-10 sm:ml-[-12rem]">
            <a
              href="www.youtube.com/@franklinwebdev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 flex gap-2 lg:h-18 md:text-3xl md:w-75 md:h-25  items-center w-full sm:w-auto py-4 animate-pulse border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-neutral-100 hover:bg-neutral-600 hover:text-white hover:border-transparent transition-colors duration-500"
            >
              <FaPlay className="text-orange-400 text-2xl" />
              <span className="hidden sm:block">Watch Videos</span>
              <span className="sm:hidden">Videos</span>
            </a>
            <a
              href="www.youtube.com/@franklinwebdev?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 flex gap-2 md:text-3xl items-center w-full sm:w-auto animate-pulse py-4 border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-neutral-100 hover:bg-neutral-600 hover:text-white hover:border-transparent transition-colors duration-500"
            >
              <FaBell className="text-orange-400 text-2xl" />
              Subscribe
            </a>
          </div>
        </motion.div>
      </div>
    </hearder>
  );
};

export default Hero;
