import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
];

export const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Services", target: "services" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
];
export const AboutText = {
  paragraphOne: `A passionate frontend engineer that drives joy in transforming
            clients/companies ideas into a real life responsive and exceptional
            web experiences. with over years of professional experience, I’ve
            delivered value to startups and businesses using industry-standard
            tools. `,

  paragraphTwo: `I'm opened to job opportunities, project colaborations, freelance
            gigs. Where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experiences then don't
            hesitate to contact me.`,

  paragraphThree: `I'm actively building a community through my YouTube channel, where
            I teach practical web development skills – from frontend to backend,
            and everything in between. Join me to stay updated with quality
            tutorials designed to level up your skills.`,
};
