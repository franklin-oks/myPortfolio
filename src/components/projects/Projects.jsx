import { motion } from "framer-motion";
import { projects } from "../../utils/data";
import Caption from "../captions/Captions";

const Projects = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="bg-neutral-100 dark:bg-neutral-900 pt-18 min-h-screen"
    >
      <Caption
        title="Recent Projects"
        description="A collection of projects that showcases my expertise"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={parentVariants}
        viewport={{ once: false, amount: 0.05 }}
        className="flex flex-col md:flex-row flex-wrap justify-center p-4 gap-6 lg:gap-8 mt-12"
      >
        {projects.map(
          (
            {
              image,
              title,
              description,
              code,
              live,
              stack,
              codeLink,
              liveLink,
              icon: Icon,
            },
            index
          ) => (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={childVariants}
              key={index}
              className="relative w-full sm:w-[90%] md:w-[47%] lg:w-[30%] bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden flex flex-col group cursor-pointer transition duration-300 hover:scale-[1.01]"
            >
              {/* GitHub icon */}
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // prevent triggering card click
                className="absolute top-4 right-4 z-20"
              >
                <span className="bg-neutral-700 dark:bg-white text-white dark:text-black text-xl w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:scale-105 transition">
                  <Icon />
                </span>
              </a>

              {/* Image + Hover buttons */}
              <div className="relative">
                <img
                  src={image}
                  alt="project preview"
                  className="w-full h-auto md:h-[10rem] lg:h-[17rem] object-cover object-center transition duration-500 group-hover:brightness-50"
                />

                {/* Hover buttons only on large screens */}
                <div className="hidden lg:flex absolute inset-0 items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600"
                  >
                    {live}
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-xl bg-white text-green-600 font-semibold shadow-md hover:bg-gray-100"
                  >
                    {code}
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl dark:text-white font-bold mb-3">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {description}
                </p>
                <span className="text-green-500 text-sm text-end mt-auto">
                  {stack}
                </span>
              </div>
            </motion.a>
          )
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
