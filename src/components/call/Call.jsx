import { motion } from "framer-motion";

const Call = () => {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900 p-4 pt-12 ">
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: false, amount: 0.05 }}
        className="flex justify-center items-center shadow-[0_8px_20px_rgba(255,165,0,2.55)] dark:shadow-[0_8px_20px_rgba(255,165,0,1.07)] transition-shadow
              rounded-xl lg:w-[50%] lg:ml-[25rem] lg:my-[6rem]"
      >
        <div className="flex flex-col p-4 space-y-8 items-center justify-center">
          <h3 className="font-bold dark:text-white text-xl">
            Prefare a quick call
          </h3>
          <p className="text-center dark:text-neutral-100 md:text-xl lg:text-2xl">
            Sometimes a conversation is worth more than a thousand messages{" "}
            <br /> to discuss on projects
          </p>
          <a
            className="bg-neutral-100 md:text-lg hover:bg-neutral-300 font-bold border-2 border-neutral-900 text-neutral-900 dark:bg-neutral-900 dark:border-neutral-100 dark:text-white px-6 py-3 rounded-full shadow-xl"
            href="#"
          >
            Schedule a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Call;
