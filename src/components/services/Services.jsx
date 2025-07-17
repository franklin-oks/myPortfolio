import { motion } from "framer-motion";
import Captions from "../captions/Captions";
import { myServices } from "../../utils/data";

const Services = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.9,
      },
    },
  };

  return (
    <section
      id="services"
      className="h-auto pt-15  dark:bg-neutral-900 bg-neutral-100"
    >
      <Captions
        title="My Services"
        description="I have helped many startup bussinesses and comapnies grow through my services"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={parentVariants}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col lg:flex-row  md:gap-12 gap-6 p-4 lg:px-18 justify-center items-stretch mt-12"
      >
        {myServices.map(
          ({ icon: Icon, title, content, talk, icon2: Icon2 }, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="flex-1 w-full min-h-[400px] flex flex-col space-y-6 justify-center items-center border border-neutral-900 p-6 dark:bg-neutral-800 dark:border-neutral-100
              shadow-[0_8px_20px_rgba(255,165,0,2.55)] dark:shadow-[0_8px_20px_rgba(255,165,0,1.07)] transition-shadow
              rounded-xl
              "
            >
              <span className="flex md:my-9  justify-center items-center w-15 h-15 bg-neutral-300 rounded-full dark:bg-neutral-700 shadow-2xs text-orange-400 text-2xl dark:text-white">
                <Icon />
              </span>
              <h3 className="text-xl md:text-4xl font-bold dark:text-white">
                {title}
              </h3>
              <p className="text-center md:text-2xl  text-lg dark:text-gray-300">
                {content}
              </p>
              <motion.div
                whileHover={{ scale: 1.3, backgroundColor: "orange" }}
                transition={{ duration: 0.9 }}
                className="flex gap-4 font-bold border-3 dark:border-white my-4 border-neutral-900 dark:text-white p-2 cursor-pointer justify-center items-center"
              >
                <span>{talk}</span>
                <span className="text-green-500">
                  <Icon2 />
                </span>
              </motion.div>
            </motion.div>
          )
        )}
      </motion.div>
      {/* </motion.div> */}
    </section>
  );
};
export default Services;
