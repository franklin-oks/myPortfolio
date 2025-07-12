import React from "react";
import me from "../assets/me.jpg";
import { motion, scale } from "framer-motion";

const AnimatedCard = () => {
  const animatedBox = {
    initial: {
      scale: 1,
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "10deg",
      transition: { duration: 0.3 },
    },
    click: {
      scale: 0.9,
      rotate: -15,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* <motion.div
        initial={{
          scale: 1,
          rotate: 0,
        }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        drag
        dragConstraints={{
          left: -50,
          right: 50,
          top: -50,
          bottom: 50,
        }}
        dragElastic={0.2}
        transition={{ type: "spring", stiffness: 300 }}
        className="max-w-sm mx-auto mt-50 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <img className="w-full  object-cover" src={me} alt="logo" />
        <div className="p-6">
          <h1 className="text-xl mb-2 font-bold">Title Card</h1>
          <p className="text-neutral-900 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            harum.
          </p>
          <button className="px-4 py-2 bg-cyan-300 text-white rounded hover:bg-cyan-400 hover:cursor-pointer transition">
            Live Preview
          </button>
        </div>
      </motion.div> */}
      {/* Animated Image gallery */}
      {/* <motion.div className="w-[80%] flex my-18">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
        >
          <img src={me} className="w-full h-auto" alt="logo" />
          <div className="absolute inset-0 opacity-0 flex space-x-4 justify-center items-center font-bold text-lg bg-opacity-50 text-white  hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <button className="py-2  px-4 bg-green-500 rounded-2xl">
              Live Preview
            </button>
            <button className="py-2 px-4 bg-green-500 rounded-2xl">
              View Code
            </button>
          </div>
        </motion.div>
        <div className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg">
          <img src={me} className="w-full h-auto" alt="logo" />
          <div className="absolute inset-0 opacity-0 space-x-4 flex justify-center items-center font-bold text-lg bg-opacity-50 text-white  hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <button className="py-2  px-4 bg-green-500 rounded-2xl">
              Live Preview
            </button>
            <button className="py-2 px-4 bg-green-500 rounded-2xl">
              View Code
            </button>
          </div>
        </div>
        <div className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg">
          <img src={me} className="w-full h-auto" alt="logo" />
          <div className="absolute inset-0 space-x-4 opacity-0 flex justify-center items-center font-bold text-lg bg-opacity-50 text-white  hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <button className="py-2  px-4 bg-green-500 rounded-2xl">
              Live Preview
            </button>
            <button className="py-2 px-4 bg-green-500 rounded-2xl">
              View Code
            </button>
          </div>
        </div>
      </motion.div> */}
      {/* Animated-shape */}
      {/* <div className="flex justify-center items-center h-screen">
        <motion.div
          className="w-60 h-60 rounded-lg bg-indigo-600"
          variants={animatedBox}
          initial="initial"
          whileHover="hover"
          whileTap="click"
          drag
        ></motion.div>
      </div> */}
    </>
  );
};

export default AnimatedCard;
