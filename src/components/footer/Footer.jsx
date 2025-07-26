import { navLinks, socialLinks } from "../../utils/data";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-white pt-12 px-4">
      <h2 className="text-center font-bold text-2xl mb-8">Quick Links</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div>
          <h3 className="text-orange-500 text-xl font-semibold mb-4">
            Navigation
          </h3>
          <div className="flex flex-col gap-3">
            {navLinks.map(({ label, target }) => (
              <Link
                key={target}
                to={target}
                smooth={true}
                duration={4000}
                offset={-70}
                className="cursor-pointer text-gray-200 hover:text-orange-400 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-orange-500 text-xl font-semibold mb-4">
            Follow Me
          </h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map(({ id, link, target, rel, icon: Icon, name }) => (
              <a
                key={id}
                href={link}
                target={target}
                rel={rel}
                className="flex items-center gap-3 hover:text-orange-400 transition-colors text-lg"
              >
                <Icon className="text-2xl" />
                {name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-orange-500 text-xl font-semibold mb-4">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3 text-gray-300">
            <a
              href="mailto:franklinokeke2016@gmail.com"
              className="hover:text-orange-400 transition-colors"
            >
              franklinokeke2016@gmail.com
            </a>
            <p>No 4, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.</p>
            <a
              href="tel:+2348103919717"
              className="hover:text-orange-400 transition-colors"
            >
              +234 810 391 9717
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-400 my-8" />

      <div className="text-center text-sm md:text-base py-4">
        &copy; {new Date().getFullYear()} Franklin Okeke. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
