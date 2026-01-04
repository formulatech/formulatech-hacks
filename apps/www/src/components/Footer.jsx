import "bootstrap-icons/font/bootstrap-icons.css";
import redStar from "../assets/red-star.svg";
import blueStar from "../assets/teal-star.svg";

const currentYear = new Date().getFullYear();

const sectionLinks = [
  { name: "About", href: "#about" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faqs" },
  { name: "Meet the Team", href: "#teams" },
];

const iconSize = "text-lg";
const lgIconSize = "text-2xl";

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/formulatech.hacks/',
    icon: <i className={`bi bi-instagram ${iconSize} md:${lgIconSize}`} />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/formulatech-hacks/posts/?feedView=all',
    icon: <i className={`bi bi-linkedin ${iconSize} md:${lgIconSize}`} />
  },
  {
    name: 'Email',
    href: 'mailto:info@formulatech.com',
    icon: <i className={`bi bi-envelope ${iconSize} md:${lgIconSize}`} />
  },
];

const headingClass="font-title text-nowrap text-xl md:text-2xl lg:text-4xl font-black inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text";
export default function Footer() {
  return (
    <div className="bg-[#FBFCEE]">
      <footer className="bg-black text-white text-sm md:text-base rounded-t-[30px] md:rounded-t-[60px] relative">
        {/* Spinning stars on mobile */}
        <img src={redStar.src} className="absolute top-[150px] right-[70px] w-[100px] h-[100px] z-0 red-star-spin md:hidden" alt=""/ >
        <img src={blueStar.src} className="absolute top-[-15%] right-[-50px] w-[180px] h-[180px] z-0 teal-star-spin md:hidden" alt=""/ >
        {/* Content container */}
        <div className="container mx-auto max-w-7xl px-10 py-8 md:px-15 md:py-10 lg:px-22 lg:py-13 relative z-10">
          {/* Top half */}
          <div className="flex justify-between flex-col gap-5 md:flex-row">
            {/* First column - Interested */}
            <div>
              <h1 className={headingClass}>
                INTERESTED?
              </h1>
              {/* Link to interest form */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScru3wvO6uZcbIDaXxxaUfB5GVFhpmB5LtLRFH8gHBSazsdFg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit font-title text-sm lg:text-lg font-bold rounded-full px-4 py-3 md:px-5 md:py-4 mt-2 md:mt-3 bg-primary hover:bg-primary/90 tracking-wide transition-all duration-200 hover:scale-105"
              >
                SAVE MY SPOT
              </a>
            </div>
            {/* Second column - Learn More */}
            <div>
              <h1 className={headingClass}>
                LEARN MORE
              </h1>
              <div>
                <ul className="mt-2">
                  {sectionLinks.map((item) => (
                    <li key={item.name} className="mb-2">
                      <a href={item.href} className="hover:text-gray-200 hover:underline">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Third column - Contact */}
            <div>
              <h1 className={headingClass}>
                CONTACT
              </h1>
              <p className="mt-2">Reach us at formulatech.hacks@gmail.com</p>
              <span className="flex mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                    aria-label={social.name}
                  >
                    <div className="mr-4">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </span>
            </div>
          </div>
          {/* Bottom half */}
          <div className="flex mt-7 md:mt-12 items-center">
            <div className="flex-shrink-0 w-[clamp(7.5rem,12vw,12.5rem)] mr-5">
              <img src="/ft_submark_logo_cropped.png" alt="FormulaTech FT Submark Logo" className=" object-contain" />
            </div>
            <div className="m-auto min-w-min">
              <h1 className="font-black px-3 -ml-2.5 md:px-5 md:-ml-4.5 text-[clamp(1rem,4vw,3.75rem)] inline-block text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-responsive font-title">
                FORMULATECH HACKS
              </h1>
              <div className="flex flex-col text-xs md:text-base lg:flex-row mt-3">
                <p className="mt-2 md:mt-0 md:order-first">Made with lots of fuel by the FormulaTech Hacks Team&nbsp;🔥</p>
                <p className="order-first lg:ml-auto lg:pl-1">© {currentYear} FormulaTechHacks</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}