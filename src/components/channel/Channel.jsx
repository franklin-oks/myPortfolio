import { AboutText } from "../../utils/data";
import { motion } from "framer-motion";
import { FaPlay, FaBell } from "react-icons/fa";

const Channel = () => {
  return (
    <section
      id="youtube"
      className="bg-neutral-100 dark:bg-neutral-900 p-4 pt-12 "
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: false, amount: 0.05 }}
        className="flex justify-center items-center shadow-[0_8px_20px_rgba(0,0,0,0.29)] dark:shadow-[0_8px_20px_rgba(0,0,0,1.29)] transition-shadow
              rounded-xl lg:w-[60%] lg:ml-[20rem] lg:my-[6rem] "
      >
        <div className="flex flex-col p-4 space-y-8 items-center justify-center">
          <p className="text-center dark:text-white text-neutral-900 font-bold lg:text-3xl text-lg p-2">
            Subscribe to my YouTube Channel
          </p>
          <p className="text-center dark:text-gray-300 text-neutral-900 md:text-xl lg:text-2xl">
            {AboutText.paragraphThree}
          </p>
          <strong className="text-green-600 text-xl md:text-2xl mt-[-1rem]">
            Subscriptions are free!
          </strong>

          <div className="flex md:ml-[.3rem]  py-1 md:ml-[-6rem] mb-8 space-x-6 sm:space-x-12 justify-center  md:mt-2 mt-10 sm:ml-[-12rem]">
            <a
              href="https://www.youtube.com/@franklinokeke2025"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 md:px-8 flex gap-2 lg:h-18 md:text-3xl md:w-75 md:h-25  items-center w-full sm:w-auto py-2 md:py-4 animate-pulse border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-neutral-100 hover:bg-red-600 hover:text-white hover:border-transparent transition-colors duration-500"
            >
              <FaPlay className="text-orange-400 text-2xl" />
              <span className="hidden md:block">Watch Videos</span>
              <span className="md:hidden">Videos</span>
            </a>
            <a
              href="https://www.youtube.com/@franklinokeke2025?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 md:px-8 flex gap-2 md:text-3xl items-center w-full sm:w-auto animate-pulse py-2 md:py-4 border-1 text-sm font-bold shadow-2xl rounded-2xl border-neutral-900 text-neutral-900 dark:border-1 cursor-pointer dark:border-neutral-100 dark:text-neutral-100 hover:bg-red-600 hover:text-white hover:border-transparent transition-colors duration-500"
            >
              <FaBell className="text-orange-400 text-2xl" />
              Subscribe
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Channel;
