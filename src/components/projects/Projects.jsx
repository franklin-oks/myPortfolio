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
        description="A collection of projects that showcases my expertise "
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={parentVariants}
        viewport={{ once: false, amount: 0.05 }}
        className="flex flex-col md:flex-row flex-wrap justify-center p-4 gap-6  lg:gap-8 mt-12"
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
            },
            index
          ) => (
            <motion.div
              variants={childVariants}
              key={index}
              className="w-full sm:w-[90%] md:w-[47%] lg:w-[30%] bg-white dark:bg-neutral-700 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image + Overlay */}
              <div className="relative group">
                <img
                  src={image}
                  alt="logo"
                  className="w-full h-[22rem] object-cover transition duration-500 group-hover:brightness-40"
                />

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500">
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600"
                  >
                    {code}
                  </a>
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600"
                  >
                    {live}
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col">
                <h2 className="text-xl dark:text-white font-bold mb-3">
                  {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {description}
                </p>
                <span className="text-green-500 text-sm text-end">{stack}</span>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
