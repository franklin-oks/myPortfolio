import React from "react";
import { motion, useMotionValue } from "framer-motion";

const UseMotionValue = () => {
  //useMotionValue: enables fine control over animation, allowing us to
  //to trigger animations programatically

  const x = useMotionValue(100);

  return (
    <motion.div>
      <h1>useMotionValue</h1>
    </motion.div>
  );
};

export default UseMotionValue;
