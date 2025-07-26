import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Captions from "../captions/Captions";
import { educationData } from "../../utils/data";

const EducationTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="education"
      className="bg-neutral-100 dark:bg-neutral-900 w-full min-h-screen pt-18 p-4"
    >
      <Captions
        title="Education Background"
        description="Roadmap of my educational journey and internships"
      />
      <div
        ref={containerRef}
        // className="relative min-h-[150vh] lg:pt-[6rem] py-10"
        className="relative  lg:pt-[6rem] py-10"
      >
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
          <motion.div
            style={{ scaleY }}
            className="w-1 h-full bg-green-500 origin-top mr-20 md:mr-55"
          />
        </div>

        {/* Timeline items */}
        <div className="relative z-1">
          {educationData.map((item, index) => (
            <div key={index} className="flex items-start mb-16 relative">
              {/* Logo */}

              <div className="w-1/2 flex justify-end pr-10">
                <img
                  src={item.logo}
                  alt={item.school}
                  className="w-25 h-25 object-cover lg:mr-[8rem] md:m-[-1rem] md:mt-2 md:w-70 md:h-40"
                />
              </div>

              {/* Dot/Step icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1], opacity: [0, 1] }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-5 h-5 rounded-full bg-white border-4 border-green-500 mr-20 md:mr-55"
                />
              </div>

              {/* School info */}
              <div className="w-full lg:w-[40%]  pl-10 mr-8">
                <div className="bg-white p-4 lg:p-12 shadow rounded-xl lg:h-[20rem]">
                  <h3 className="text-lg font-bold lg:text-3xl lg:mb-6">
                    {item.school}
                  </h3>
                  <p className="text-sm md:text-lg lg:mb-6 lg:text-xl">
                    {item.degree}
                  </p>
                  <span className="text-xs md:text-lg lg:text-xl text-gray-500">
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;

// chat
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
// import Captions from "../captions/Captions";
// import { educationData } from "../../utils/data";

// const EducationTimeline = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <section
//       id="education"
//       className="bg-neutral-100 dark:bg-neutral-900 w-full min-h-screen pt-20 p-4"
//     >
//       <Captions
//         title="Education Background"
//         description="Roadmap of my educational journey and internships"
//       />

//       <div ref={containerRef} className="relative w-full py-10">
//         {/* Vertical timeline line */}
//         <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-0">
//           <motion.div
//             style={{ scaleY }}
//             className="w-1 h-full bg-green-500 origin-top"
//           />
//         </div>

//         <div className="relative z-10 space-y-20">
//           {educationData.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col md:flex-row items-center gap-6 w-full"
//             >
//               {/* Left (Image) */}
//               <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
//                 <img
//                   src={item.logo}
//                   alt={item.school}
//                   className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain"
//                 />
//               </div>

//               {/* Dot */}
//               <div className="absolute left-1/2 transform -translate-x-1/2">
//                 <motion.div
//                   whileInView={{ scale: [0, 1.2, 1], opacity: [0, 1] }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   className="w-5 h-5 rounded-full bg-white border-4 border-green-500"
//                 />
//               </div>

//               {/* Right (Card) */}
//               <div className="w-full md:w-1/2 px-4">
//                 <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md">
//                   <h3 className="text-lg font-bold lg:text-2xl mb-2 text-black dark:text-white">
//                     {item.school}
//                   </h3>
//                   <p className="text-sm lg:text-lg mb-1 text-gray-700 dark:text-gray-300">
//                     {item.degree}
//                   </p>
//                   <span className="text-xs lg:text-base text-gray-500 dark:text-gray-400">
//                     {item.year}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EducationTimeline;
