import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Captions = ({ title, description }) => {
  const variantName = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex mt-8 flex-col space-y-4 justify-center items-center"
    >
      <motion.h1
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
        className="text-neutral-900 lg:my-4 dark:text-white text-2xl lg:text-5xl font-bold"
      >
        {title.split("").map((char, index) => (
          <motion.span variants={variantName} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <p className="text-center dark:text-gray-300 text-neutral-900 lg:text-3xl text-lg p-2">
        {description}
      </p>
    </motion.section>
  );
};

export default Captions;
