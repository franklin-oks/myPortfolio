import { Typewriter } from "react-simple-typewriter";
import logo from "../../assets/me.jpg";
import { Link } from "react-scroll";
import { socialLinks, AboutText } from "../../utils/data";
import { motion, spring } from "framer-motion";

const Hero = () => {
  const name = "Franklin Okeke";
  const variantName = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <hearder className="w-full transition-all duration-500 bg-neutral-100 dark:bg-neutral-900 ">
      <div className="flex flex-col lg:ml-[3rem] lg:mr-[-8rem] lg:mt-[-8rem]  lg:flex-row justify-between items-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex lg:order-0 order-1 flex-col space-y-8"
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="text-neutral-900  mt-12 ml-4 lg:mt-[24rem] lg:ml-[-2rem] md:text-5xl lg:text-5xl dark:text-white text-2xl sm:mt-12 sm:text-3xl font-bold"
          >
            Hello, I'm{" "}
            <span className="text-orange-400 ">
              {name.split("").map((char, index) => (
                <motion.span variants={variantName} key={index}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <span className="text-orange-400 lg:ml-[-2rem] ml-4 mt-[-2rem] lg:mt-0 text-3xl lg:text-5xl md:text-5xl md:mt-1 font-bold">
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
          <p className="text-xl lg:ml-[-2rem] lg:text-2xl md:text-2xl dark:text-gray-300 text-neutral-900 leading-relaxed sm:leading-loose max-w-[60ch]">
            {AboutText.paragraphOne}
          </p>
          <p className="text-xl lg:ml-[-2rem] md:text-2xl md:mt-[-1rem] dark:text-gray-300 text-neutral-900 leading-relaxed sm:leading-loose mt-[-1rem]  max-w-[60ch] ">
            {AboutText.paragraphTwo}
          </p>
          <div className="flex lg:ml-[-2rem] space-x-8 mt-4 mb-10">
            <Link to="contact" smooth={true} duration={3000} offset={-20}>
              <button className="px-8  lg:h-18 sm:w-45 md:w-65 md:my-4 md:h-25 sm:text-lg md:text-3xl animate-bounce  py-4  border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-white hover:bg-neutral-600 hover:text-white hover:border-transparent transition-colors duration-500">
                Contact Me
              </button>
            </Link>
            <Link to="youtube" smooth={true} duration={3000} offset={-20}>
              <button className="px-8  lg:h-18 sm:w-45 md:w-65 md:my-4 md:h-25 sm:text-lg md:text-3xl animate-bounce  py-4  border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-white hover:bg-neutral-600 hover:text-white hover:border-transparent transition-colors duration-500">
                My Channel
              </button>
            </Link>
          </div>
          <div className="flex lg:ml-[-2rem] md:text-5xl lg:text-2xl  text-4xl mt-[-1rem] ml-4 mb-10 space-x-6 text-neutral-900 dark:text-white">
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
          className="flex  flex-col  space-y-4  lg:space-x-2"
        >
          <motion.img
            animate={{
              scale: [1, 1.01, 1],
              rotate: [1, 1.01, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 1,
              transition: { duration: 0.6, type: spring, stiffness: 300 },
            }}
            src={logo}
            alt="logo"
            className="w-96 h-96 lg:w-130 lg:h-130 lg:mr-[14rem] lg:mt-[6rem] md:w-170 md:h-170 md:ml-5 sm:w-130 sm:h-130 sm:rounded-3xl sm:ml-6 p-3 object-cover  rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </hearder>
  );
};

export default Hero;
