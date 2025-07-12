import React, { useState } from "react";
import { motion } from "framer-motion";
import me from "../assets/me.jpg";

const Stagger = () => {
  const [showImages, setShowImages] = useState(false);
  {
    /* Stagger animation: is a technique where multiple elements
          animate in a sequence rather than at once */
  }

  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        duration: 5,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleClick = () => setShowImages((prev) => !prev);

  const parentVariant2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.9,
        staggerDirection: 1,
      },
    },
  };

  const childVariant2 = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="flex justify-center items-center space-x-4 h-screen"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div
            variants={childVariant}
            className="bg-red-600  h-20 w-20 rounded-full shadow-2xl"
            key={index}
          />
        ))}
      </motion.div> */}

      {/* stagger image galleries */}
      <button
        className="bg-violet-600 px-8 mt-[3rem] py-3 rounded-2xl text-white font-bold"
        onClick={handleClick}
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>
      <motion.div
        variants={parentVariant2}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center h-screen"
      >
        <motion.div variants={childVariant2} className="flex space-x-4">
          <img src={me} alt="logo" className="w-50 h-50 rounded shadow-2xl" />
          <img src={me} alt="logo" className="w-50 h-50 rounded shadow-2xl" />
          <img src={me} alt="logo" className="w-50 h-50 rounded shadow-2xl" />
          <img src={me} alt="logo" className="w-50 h-50 rounded shadow-2xl" />
          <img src={me} alt="logo" className="w-50 h-50 rounded shadow-2xl" />
          <img src={me} alt="logo" className="w-50 h-50 rounded shadow-2xl" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Stagger;
