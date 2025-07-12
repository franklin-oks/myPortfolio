import React, { useState } from "react";
import { easeInOut, motion, spring } from "framer-motion";

const FramerMotion = () => {
  const [visible, setVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const variant = {
    hidden: { opacity: 0, scale: 0.8 }, //defining variant state values
    visible: { opacity: 1, scale: 0.2 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const cardVariant = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* <motion.div
        className="bg-cyan-400 h-42 w-42   p-8"
        animate={{
          //   scale: [1, 2, 1, 3, 1],
          //   rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "30%", "40%", "20%"],
        }}
        transition={{ duration: 5, delay: 2 }}
      >
        <p className="flex justify-center items-center text-white font-bold">
          framer guy
        </p>
      </motion.div> */}

      {/* BUTTON */}
      {/* <motion.button
        className="bg-indigo-500 px-4 py-2 text-white ml-12 cursor-pointer"
        animate={{
          scale: [1, 2, 3, 2, 1],
          backgroundColor: ["#f4f5f4", "#000", "#fff", "#ededed", "#5c6c6c7b"],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        Click Me
      </motion.button> */}

      {/* BouncingLoader */}
      {/* <div className="flex justify-center items-center space-x-8">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-cyan-400 w-12 h-12 rounded-full p-4 "
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.1,
            }}
          />
        ))}
      </div> */}

      {/* variants */}
      {/* <motion.div
        className="bg-cyan-400 h-42 w-42 rounded-full  p-8"
        // defining varaints
        // variants={{
        //   hidden: { opacity: 0, scale: 0.8 }, //defining variant state values
        //   visible: { opacity: 1, scale: 0.2 },
        //   exit: { opacity: 0, scale: 0.5 },
        // }}

        // method3
        // create a varaint.jsx paste the variant with export
        // import {varaint} from './variant'
        // and use it here

        variants={variant} //accessing varaint from created object above
        initial="hidden" //using varaints
        animate={visible ? "visible" : "hidden"}
        transition={{ duration: 3 }}
        exit="exit"
        onClick={() => setVisible(!visible)}
      ></motion.div> */}

      {/* Flipping Cards */}
      {/* <motion.div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-64 h-40  bg-indigo-200 rounded-lg shadow-lg overflow-hidden transform-3d"
      >
        <motion.div
          variants={{
            front: { rotateY: 0 },
            back: { rotateY: 180 },
          }}
          initial="front"
          animate={isFlipped ? "back" : "front"}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-indigo-200 flex items-center justify-center text-xl font-bold"
        >
          Font Side
        </motion.div>
        <motion.div
          variants={cardVariant}
          initial="front"
          animate={isFlipped ? "back" : "front"}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-cyan-200 flex items-center justify-center text-xl font-bold"
        >
          Back Side
        </motion.div>
      </motion.div> */}

      {/* Gestures */}
      {/* Gestures allows us to add interactive animations based on users 
      action like dragging,hovering or tapping. making our component to
       respond how the users interact with them */}

      {/* whileHover */}
      <motion.div
        className="bg-yellow-500 w-34 h-34 rounded-full "
        whileHover={{ scale: 1.5, rotate: 1, cursor: "pointer" }}
        transition={{ duration: 2, type: "spring", stiffness: 300 }}
      />
      {/* whileTap */}
      <motion.div
        className="bg-red-500 w-34 h-34 rounded-full "
        whileTap={{
          scale: 0.8,
          backgroundColor: "pink",
          cursor: "pointer",
        }}
        transition={{ duration: 2, type: "spring", stiffness: 300 }}
      />
      {/* whileDrag */}
      <motion.div
        className="bg-blue-500 w-34 h-34 rounded-full "
        drag //drag everywhere in the page
        // drag="x"  //drag on on x direction
        // drag="y"  //drag on on y direction
        dragConstraints={{
          // set drag boundaries, and it will return when leave
          top: -50,
          left: -50,
          bottom: 50,
          right: 50,
        }}
      />
    </div>
  );
};

export default FramerMotion;
