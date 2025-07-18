import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import me from "../assets/me.jpg";
import aptech from "../assets/download.jpg";
import esut from "../assets/esut.png";

export const socialLinks = [
  {
    id: 1,
    link: "https://facebook.com/franklinobinna",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaFacebook,
  },
  {
    id: 2,
    link: "https://x.com/franklinokeke",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaXTwitter,
  },
  {
    id: 3,
    link: "https://instagram.com/franklinokeke",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaInstagram,
  },
  {
    id: 4,
    link: "https://github.com/franklin-oks",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaGithub,
  },
  {
    id: 5,
    link: "https://linkedin.com/franklin-oks",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaLinkedin,
  },
];

export const navLinks = [
  { label: "Home", target: "home" },
  { label: "Services", target: "services" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
];
export const AboutText = {
  paragraphOne: `A passionate software engineer that drives joy in transforming
            clients/companies ideas into a real life responsive and exceptional
            web experiences. with over years of professional experience, I’ve
            delivered value to startups and businesses using industry-standard
            tools, helping them to grow thier customers and audience. `,

  paragraphTwo: `I'm opened to job opportunities, project colaborations, freelance
            gigs. Where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experiences then don't
            hesitate to contact me.`,

  paragraphThree: `I'm actively building a community through my YouTube channel, where
            I teach practical web development skills – from frontend to backend,
            and everything in between. Join me to stay updated with quality
            tutorials designed to level up your skills.`,
};

export const myServices = [
  {
    icon: FaMobile,
    title: "FrontEnd Development",
    content: `Dedicated to crafting exceptional user experience by translating design
              concept into responsive interfaces that elavates web and application usability`,
    talk: "Lets talk",
    icon2: FaLongArrowAltRight,
  },
  {
    icon: FaCode,
    title: "BackEnd Development",
    content: `Architect, design and implement the sever-side logic, database and APIs
                        for web and mobile applications. ensuring functionality and optimal performance.`,
    talk: "Lets talk",
    icon2: FaLongArrowAltRight,
  },
  {
    icon: GiElectricalResistance,
    title: "Electrical Engineer",
    content: `competent and certified in electrical wiring and service design, solar, camera and CCTV installation
                        and maintenances`,
    talk: "Lets talk",
    icon2: FaLongArrowAltRight,
  },
];

export const skills = [
  "JavaScript",
  "React JS",
  "Python",
  "Django",
  "TailwindCss",
  "SQL",
  "Framer Motion",
  "Html5",
  "Css3",
  "Zustand (State Management)",
  "Responsive Design",
  "English Language (Proficient)",
  "HTTP",
  "Git",
  "GitHub",
];

export const ratings = [
  { number: "10", title: "Projects Completed", suffix: "+" },
  { number: "2", title: "Years of Experience", suffix: "+" },
  { number: "15", title: "Technologies", suffix: "+" },
  { number: "100", title: "Clients Satisfaction", suffix: "%" },
  { number: "500", title: "YouTube Subscribers", suffix: "+" },
];

export const projects = [
  {
    image: me,
    title: "CodeMaths",
    description: `Built a modern web application that solves complex mathematical expressions using code. usefull for students and teachers. I provided solutions for quadratic equations, 3D-dimentional linear equations, martix off all kinds and still working on differentiation and integration`,
    code: "View Code",
    codeLink: "https://www.github.com",
    live: "Live Preview",
    liveLink: "https://www.varcel.com",
    stack: `[ React || TailwindCss || MathJS || AlgebraJS ]`,
  },
  {
    image: me,
    title: "CodeMaths",
    description: `Built a modern web application that solves complex mathematical expressions using code. usefull for students and teachers. I provided solutions for quadratic equations, 3D-dimentional linear equations, martix off all kinds and still working on differentiation and integration`,
    code: "View Code",
    codeLink: "https://www.github.com",
    live: "Live Preview",
    liveLink: "https://www.varcel.com",
    stack: `[ React || TailwindCss || MathJS || AlgebraJS ]`,
  },
  {
    image: me,
    title: "CodeMaths",
    description: `Built a modern web application that solves complex mathematical expressions using code. usefull for students and teachers. I provided solutions for quadratic equations, 3D-dimentional linear equations, martix off all kinds and still working on differentiation and integration`,
    code: "View Code",
    codeLink: "https://www.github.com",
    live: "Live Preview",
    liveLink: "https://www.varcel.com",
    stack: `[ React || TailwindCss || MathJS || AlgebraJS ]`,
  },
  {
    image: me,
    title: "CodeMaths",
    description: `Built a modern web application that solves complex mathematical expressions using code. usefull for students and teachers. I provided solutions for quadratic equations, 3D-dimentional linear equations, martix off all kinds and still working on differentiation and integration`,
    code: "View Code",
    codeLink: "https://www.github.com",
    live: "Live Preview",
    liveLink: "https://www.varcel.com",
    stack: `[ React || TailwindCss || MathJS || AlgebraJS ]`,
  },
  {
    image: me,
    title: "CodeMaths",
    description: `Built a modern web application that solves complex mathematical expressions using code. usefull for students and teachers. I provided solutions for quadratic equations, 3D-dimentional linear equations, martix off all kinds and still working on differentiation and integration`,
    code: "View Code",
    codeLink: "https://www.github.com",
    live: "Live Preview",
    liveLink: "https://www.varcel.com",
    stack: `[ React || TailwindCss || MathJS || AlgebraJS ]`,
  },
  {
    image: me,
    title: "CodeMaths",
    description: `Built a modern web application that solves complex mathematical expressions using code. usefull for students and teachers. I provided solutions for quadratic equations, 3D-dimentional linear equations, martix off all kinds and still working on differentiation and integration`,
    code: "View Code",
    codeLink: "https://www.github.com",
    live: "Live Preview",
    liveLink: "https://www.varcel.com",
    stack: `[ React || TailwindCss || MathJS || AlgebraJS ]`,
  },
];

export const educationData = [
  {
    logo: esut,
    school: "Enugu State University of Science and Technology. (ESUT)",
    degree: "B.Eng. in Electrical/Electronics Engineering",
    year: "2015 - 2020",
  },
  {
    logo: aptech,
    school: "Aptech Computer Education",
    degree: "Advance Diploma in Software Engineering. (ADSE)",
    year: "2023 - 2025",
  },
  {
    logo: "https://images.unsplash.com/photo-1675015989084-f26c082c3bd3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    school: "Samba Research Institute for data Science",
    degree: "Internship (FrontEnd Development)",
    year: "2022 - 2023",
  },
];
