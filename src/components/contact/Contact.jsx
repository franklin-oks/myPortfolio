import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { LuSend } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa6";
import Captions from "../captions/Captions";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

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

  // Form validation
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is Required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Atleast two characters required";
    if (!formData.email.trim()) newErrors.email = "Email is Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.number.trim()) newErrors.number = "Number is Required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // form submission EmailJs
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          form.current.reset();
          setFormData({ name: "", email: "", number: "", message: "" });
          setStatus("Message Sent");

          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          console.warn("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-neutral-100 overflow-hidden dark:bg-neutral-900 pt-18 min-h-screen"
    >
      <Captions
        title="Lets get in Touch"
        description="Let's discuss how to bring your ideas to life."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={parentVariants}
        viewport={{ once: false, amount: 0.05 }}
        className="flex flex-col lg:flex-row justify-around items-center  lg:pt-25 p-4"
      >
        <motion.div
          variants={childVariants}
          className=" bg-gray-300 dark:bg-neutral-700 rounded-xl shadow-2xl blur-5 p-2 md:p-8 lg:w-[40%] md:w-[90%] w-[100%]"
        >
          <div className="flex flex-col p-2  space-y-4">
            <h2 className="text-xl text-neutral-900 font-bold dark:text-white">
              Send me a message
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col p-2 space-y-4"
            >
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-white text-lg outline-0 p-3"
                type="text"
                name="name"
                placeholder="Enter Name"
                required
              />
              {errors.name && (
                <span className="text-sm text-red-500">{errors.name}</span>
              )}
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-white text-lg outline-0 p-3"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email}</span>
              )}
              <input
                value={formData.number}
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })
                }
                className="bg-white text-lg outline-0 p-3"
                type="number"
                name="number"
                placeholder="Phone Number"
                required
              />
              {errors.number && (
                <span className="text-sm text-red-500">{errors.number}</span>
              )}
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-white text-lg outline-0 p-3 rounded-xl"
                placeholder="Your Message....."
                cols="4"
                rows="5"
                name="message"
                required
              />
              {errors.message && (
                <span className="text-sm text-red-500">{errors.message}</span>
              )}
              <button
                className="flex text-xl rounded-full hover:bg-blue-800 transition-colors cursor-pointer duration-100 p-3 my-5 bg-blue-600 text-white justify-center gap-3 items-center"
                type="submit"
              >
                <LuSend />
                {status === "Sending..."
                  ? "Sending..."
                  : status === "Message Sent"
                  ? "Message Sent"
                  : " Send Message"}
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="mt-8 bg-gray-300  dark:bg-neutral-700 rounded-xl shadow-2xl blur-5 p-2 md:p-8 lg:w-[40%] md:w-[90%]"
        >
          <div className="flex flex-col p-2  space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              Contact Information
            </h2>
            <div className="flex justify-start cursor-pointer hover:bg-gray-100 rounded-2xl  bg-white p-2  items-center space-x-6 w-[100%]">
              <FaLocationDot className="text-lg ml-4 text-blue-600" />
              <div className="flex flex-col">
                <span>Location</span>
                <span className="font-bold">
                  NO 45 Ziks Avenue Uwani Enugu, Nigeria.
                </span>
              </div>
            </div>
            <div className="flex justify-start cursor-pointer hover:bg-gray-100 rounded-2xl items-center bg-white p-2 space-x-6">
              <MdEmail className="text-lg ml-4 text-blue-600" />
              <div className="flex flex-col">
                <span>Email</span>
                <div className="flex flex-col">
                  <a
                    href="mailto:franklinokeke2016@gmail.com"
                    className="font-bold hover:decoration-2 hover:text-blue-600 hover:decoration-blue-600 hover:underline"
                  >
                    franklinokeke2016@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-start cursor-pointer hover:bg-gray-100 rounded-2xl items-center gap-3 bg-white p-2 space-x-6">
              <FaPhoneAlt className="text-lg ml-4 text-blue-600" />
              <div className="flex flex-col">
                <span>Phone</span>
                <a
                  href="tel:+2348103919717"
                  className="font-bold hover:decoration-2 hover:text-blue-600 hover:decoration-blue-600 hover:underline"
                >
                  +2348103919717
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-2  space-y-4 relative">
            <h2 className="text-2xl font-bold mt-12 text-neutral-900 dark:text-white">
              Follow Me
            </h2>
            <div className="flex flex-wrap space-y-4 justify-start md:justify-start cursor-pointer rounded-2xl  bg-gray-300 p-2  items-center space-x-4">
              <a
                href="https://github.com/franklin-oks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-3 text-xl bg-blue-600 hover:bg-blue-800 text-white rounded-full px-4 py-2 items-center"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/franklin-oks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-3 items-center text-xl bg-blue-600 hover:bg-blue-800 text-white rounded-full px-4 py-2"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/franklinokeke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-3 items-center text-xl bg-blue-600 hover:bg-blue-800 text-white rounded-full px-4 py-2"
              >
                <FaXTwitter />
                <span>Twitter</span>
              </a>
              <a
                href="https://facebook.com/franklinobinna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-3 items-center text-xl bg-blue-600 hover:bg-blue-800 text-white rounded-full px-4 py-2"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com/franklinokeke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-3 items-center text-xl bg-blue-600 hover:bg-blue-800 text-white rounded-full px-4 py-2"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex bg-green-200 md:ml-[6rem] md:w-[35rem] ml-9 lg:ml-[62rem] lg:mt-2 p-4  my-12 lg:w-[30rem] w-[20rem] mt-[-.1rem]">
        <div className="flex flex-col justify-start items-center ">
          <div className="flex gap-3 justify-center items-center ml-[-3rem]">
            <div className="bg-green-700 w-6 h-6 rounded-full animate-pulse" />
            <span className="text-green-700 font-bold">Available for work</span>
          </div>
          <span className="text-neutral-900 font-bold md:text-lg  ">
            I am available for freelance projects and full time opportunities
          </span>
        </div>
      </div>
      {/*  */}

      {(status === "Message Sent" || status === "error") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-neutral-900 w-[90%] md:w-[30rem] p-6 rounded-2xl shadow-2xl relative">
            <div className="flex flex-col gap-4 items-center text-center">
              {status === "Message Sent" ? (
                <>
                  <GrStatusGood className="text-green-600 text-5xl" />
                  <p className="text-neutral-900 dark:text-white text-xl font-semibold">
                    Message sent successfully!
                  </p>
                </>
              ) : (
                <>
                  <p className="text-red-600 text-xl font-semibold">
                    Failed to send. Please try again.
                  </p>
                </>
              )}
            </div>
            <button
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
              onClick={() => setStatus("")}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Contact;
