import { navLinks, socialLinks } from "../../utils/data";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 pt-15 h-auto dark:bg-neutral-900 p-4">
      <h2 className="text-center pt-8 font-bold text-xl text-white">
        Quick Links
      </h2>
      <div className="flex flex-col p-2 lg:px-12 md:flex-row justify-around gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-2xl text-orange-600">Navigations</span>
          {navLinks.map(({ label, target }) => (
            <Link
              key={target}
              to={target}
              smooth={true}
              duration={4000}
              offset={-70}
              className="cursor-pointer text-gray-200 text-xl dark:text-white hover:text-orange-400 transition-colors duration-500 after:content-[''] after:block after:h-[2px] after:bg-orange-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left w-20"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-2xl text-orange-600">Follow Me</span>
          {socialLinks.map(({ id, link, target, rel, icon: Icon }) => (
            <a
              key={id}
              href={link}
              target={target}
              rel={rel}
              className="hover:text-orange-400 text-gray-200 text-2xl transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-2xl text-orange-600">Get in touch</span>
          <div className="flex flex-col gap-3 text-gray-200 text-xl">
            <span>Email: franklinokeke2016@gmail.com</span>
            <span>Address: 45 Ziks Avenue Uwani Enugu, Nigeria.</span>
            <span>Tel: +234 8103919717</span>
          </div>
        </div>
      </div>
      <hr className="text-gray-300 py-2" />
      <span className="text-white text-xl p-2 mt-2">
        &copy;Copywrite {new Date().getFullYear()} by Franklin Okeke. {"  "} All
        rights reserved
      </span>
    </footer>
  );
};
export default Footer;
