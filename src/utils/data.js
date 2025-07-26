import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import me from "../assets/me.jpg";
import aptech from "../assets/download.jpg";
import esut from "../assets/esut.png";
// projects
import carRental from "../assets/carRental.png";
import codeMaths from "../assets/codeMaths.png";
import education from "../assets/education.png";
import netflix_1 from "../assets/netflix_1.png";
import quickeat from "../assets/quickeat-main.png";
import portfolio from "../assets/portfolio.png";

export const socialLinks = [
  {
    id: 1,
    link: "https://web.facebook.com/franklinokekeTech",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaFacebook,
    name: "Facebook",
  },
  {
    id: 2,
    link: "https://x.com/franklin__okeke/status/1948457039124201954",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaXTwitter,
    name: "Twitter (X)",
  },
  {
    id: 3,
    link: "https://www.instagram.com/franklinokeke_tech/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaInstagram,
    name: "Instagram",
  },
  {
    id: 4,
    link: "https://github.com/franklin-oks",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaGithub,
    name: "GitHub",
  },
  {
    id: 5,
    link: "https://www.linkedin.com/in/franklin-okeke-0b1967376/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: FaLinkedin,
    name: "LinkedIn",
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

  paragraphTwo: `I'm opened to job opportunities, project collaborations, freelance
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
    content: ` Certified and competent in electrical wiring and service design, solar system installation, 
               CCTV and camera setup, and maintenance. I also specialize in electrical wiring diagrams delivering quality service at an affordable cost. `,
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
    image: codeMaths,
    title: "CodeMaths",
    description: `CodeMaths is an advanced web application aimed at helping students and educators solve a variety of mathematical problems efficiently. It currently supports solutions for quadratic equations, 3D linear equations, Eignenvalues and Eigenvectors etc. and a range of matrix operations. Built with React, MathJS. Integrated user authentication with firebase. It offers a responsive and intuitive user interface. Additional modules like differentiation and integration are actively being developed and will be available once its development is complete.`,
    code: "View Code",
    codeLink: "http",
    icon: FaGithub,
    live: "Live Preview",
    liveLink: "https://code-maths.vercel.app/",
    stack: `[ React || TailwindCss || MathJS || Firebase ]`,
  },
  {
    image: netflix_1,
    title: "Nexflix Clone",
    description: `A dynamic movie streaming website that fetches real-time data from the TMDB API to display trending and featured movies. This project helped me strengthen my understanding of API integration using the useEffect hook in React. I also implemented Firebase authentication to manage user sign-in and sign-up. It was a valuable hands-on experience in building interactive, real-world applications.`,
    code: "View Code",
    codeLink: "https://github.com/franklin-oks/nextflix_clone",
    live: "Live Preview",
    icon: FaGithub,
    liveLink: "https://nextflix-clone-3ovg.vercel.app/",
    stack: `[ React || Css || TMDB API || Firebase ]`,
  },
  {
    image: carRental,
    title: "car Rentals Website",
    description: `A front-end concept for a car rental platform, showcasing a clean and responsive UI built with React and Tailwind CSS. The project features structured sections for car listings, car tips, and FAQs — currently filled with placeholder content — and demonstrates my ability to design a layout for real-world use cases. This was built to practice component-based development and UI design for client-oriented services.`,
    code: "View Code",
    icon: FaGithub,
    codeLink: "https://github.com/franklin-oks/carRentalReactProject",
    live: "Live Preview",
    liveLink: "https://car-rental-react-project-liart.vercel.app/",
    stack: `[ React || TailwindCss ]`,
  },
  {
    image: education,
    title: "Education Website",
    description: `Built a responsive education platform that highlights available courses with video previews to give users a glimpse of each program. The site includes a clean layout, intuitive navigation, and a fully functional contact form integrated with EmailJS for seamless communication. Designed with React and styled using Tailwind CSS to ensure a modern and engaging user experience.`,
    code: "View Code",
    icon: FaGithub,
    codeLink: "https://github.com/franklin-oks/Education-React-Project",
    live: "Live Preview",
    liveLink: "https://education-react-project-3v68.vercel.app/",
    stack: `[ React || TailwindCss || EmailJs ]`,
  },
  {
    image: portfolio,
    title: "Personal website",
    description: `A clean, modern, and fully responsive portfolio website designed to showcase my skills, experience, and projects. It features a smooth light/dark mode toggle, interactive animations using Framer Motion, and a functional contact form powered by EmailJS for real-time messaging. Built with React and styled using Tailwind CSS, this project reflects my frontend development proficiency and personal brand.`,
    code: "View Code",
    icon: FaGithub,
    codeLink: "https://github.com/franklin-oks/myPortfolio",
    live: "Live Preview",
    liveLink: "https://my-portfolio-htot.vercel.app",
    stack: `[ React || TailwindCss || Framer Motion ]`,
  },
  {
    image: quickeat,
    title: "E-Commerce",
    description: `This was my very first project after learning Tailwind CSS and React. While it's simple and not fully polished, it represents the beginning of my frontend development journey. I built a responsive e-commerce interface to practice layout design, styling, and component-based architecture. It’s a meaningful milestone that reminds me how far I’ve come.`,
    code: "View Code",
    icon: FaGithub,
    codeLink: "https://github.com/franklin-oks/QucikEat-ReactProject",
    live: "Live Preview",
    liveLink: "https://qucik-eat-react-project.vercel.app/",
    stack: `[ React || TailwindCss ]`,
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
