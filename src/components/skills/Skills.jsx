import { motion } from "framer-motion";
import { skills, ratings } from "../../utils/data";
import Captions from "../captions/Captions";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const AnimatedNumber = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 });

    useEffect(() => {
      let timer;
      if (inView) {
        let start = 0;
        const end = parseInt(target);
        const duration = 1000;
        const stepTime = Math.max(Math.floor(duration / end), 10);

        timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, stepTime);
      } else {
        setCount(0); // reset when out of view
      }

      return () => clearInterval(timer);
    }, [inView, target]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="skills"
      className="w-full h-auto pt-12  p-4 lg:pt-40  bg-neutral-100 dark:bg-neutral-900"
    >
      <Captions title="Skills/Technical Competence" />
      <motion.div
        initial="hidden"
        variants={parentVariants}
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap gap-4 justify-center items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className="w-auto lg:mt-12  text-neutral-900 dark:text-white bg-neutral-300 px-5 py-3 dark:bg-neutral-700 rounded-full font-bold text-lg"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="bg-blue-950 flex lg:pt-15 space-y-8 mt-12 lg:mt-25 flex-col md:flex-row lg:gap-[5rem] p-4 justify-center items-center">
        {ratings.map(({ number, title, suffix }, index) => (
          <motion.div
            key={index}
            className="flex text-xl flex-col justify-center items-center text-neutral-100"
          >
            <span className="text-3xl  text-orange-500 font-bold">
              {" "}
              <AnimatedNumber target={number} suffix={suffix} />
            </span>
            <span className="md:text-sm md:ml-6">{title}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
