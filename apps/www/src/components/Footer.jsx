import redStar from "../assets/red-star.svg";
import blueStar from "../assets/teal-star.svg";

const currentYear = new Date().getFullYear();

const sectionLinks = [
  { name: "About", href: "#about" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faqs" },
  { name: "Meet the Team", href: "#teams" },
];

function SocialIcon({ children }) {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center md:h-8 md:w-8">
      {children}
    </span>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/formulatech.hacks/",
    icon: (
      <SocialIcon>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-current">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
        </svg>
      </SocialIcon>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/formulatech-hacks/posts/?feedView=all",
    icon: (
      <SocialIcon>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-current">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23.5h-4V8.25zM8.25 8.25h3.84v2.09h.05c.53-1 1.84-2.09 3.79-2.09 4.05 0 4.8 2.67 4.8 6.14V23.5h-4v-6.89c0-1.64-.03-3.75-2.28-3.75-2.28 0-2.63 1.78-2.63 3.62V23.5h-4V8.25z" />
        </svg>
      </SocialIcon>
    ),
  },
  {
    name: "Email",
    href: "mailto:formulatech.hacks@gmail.com",
    icon: (
      <SocialIcon>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-current">
          <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 7.5L20 6H4l8 5.5zM4 18h16V9.2l-8 5.5-8-5.5V18z" />
        </svg>
      </SocialIcon>
    ),
  },
];

const headingClass =
  "font-title text-nowrap text-xl md:text-2xl lg:text-4xl font-black inline-block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text";

export default function Footer() {
  return (
    <div className="bg-[#FBFCEE] mt-[10dvh]">
      <footer className="bg-black text-white text-sm md:text-base rounded-t-[30px] md:rounded-t-[60px] relative">
        <img
          src={redStar.src}
          className="absolute top-[150px] right-[70px] w-[100px] h-[100px] z-0 red-star-spin md:hidden"
          alt=""
          aria-hidden="true"
        />
        <img
          src={blueStar.src}
          className="absolute top-[-15%] right-[-50px] w-[180px] h-[180px] z-0 teal-star-spin md:hidden"
          alt=""
          aria-hidden="true"
        />
        <div className="container mx-auto max-w-7xl px-10 py-8 md:px-15 md:py-10 lg:px-22 lg:py-13 relative z-10">
          <div className="flex justify-between flex-col gap-5 md:flex-row">
            <div>
              <h2 className={headingClass}>INTERESTED?</h2>
              <a
                href="https://forms.gle/oLzGwE5MKuPRKab89"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit font-title text-sm lg:text-lg font-bold rounded-full px-4 py-3 md:px-5 md:py-4 mt-2 md:mt-3 bg-primary hover:bg-primary/90 tracking-wide transition-all duration-200 hover:scale-105"
              >
                APPLY NOW
              </a>
            </div>
            <div>
              <h2 className={headingClass}>LEARN MORE</h2>
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
            <div>
              <h2 className={headingClass}>CONTACT</h2>
              <p className="mt-2">Reach us at formulatech.hacks@gmail.com</p>
              <span className="flex mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 mr-4"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </span>
            </div>
          </div>
          <div className="flex mt-7 md:mt-12 items-center">
            <div className="flex-shrink-0 w-[clamp(7.5rem,12vw,12.5rem)] mr-5">
              <img
                src="/ft_submark_logo_cropped.png"
                alt=""
                aria-hidden="true"
                className="object-contain"
              />
            </div>
            <div className="m-auto min-w-min">
              <p className="font-black px-3 -ml-2.5 md:px-5 md:-ml-4.5 text-[clamp(1rem,4vw,3.75rem)] inline-block text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-responsive font-title">
                FORMULATECH HACKS
              </p>
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
