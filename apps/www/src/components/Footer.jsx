import "bootstrap-icons/font/bootstrap-icons.css";
const currentYear = new Date().getFullYear();

const sectionLinks = [
  { name: "About", href: "#" },
  { name: "Sponsors", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Meet the Team", href: "#" },
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
    <footer className="bg-black text-white text-sm md:text-base rounded-t-[30px] md:rounded-t-[60px] mt-2">
      <div className="container mx-auto max-w-7xl px-10 py-8 md:px-15 md:py-10 lg:px-22 lg:py-13">
        {/* Top half */}
        <div className="flex justify-between flex-col gap-5 md:flex-row">
          <div>
            <h1 className={headingClass}>
              INTERESTED?
            </h1>
            <button className="block font-title bg-primary text-sm font-bold rounded-full p-[15px] py-[12px] mt-2 md:px-[20px] md:py-[18px] md:mt-3">
              SAVE MY SPOT
            </button>
          </div>
          <div>
            <h1 className={headingClass}>
              LEARN MORE
            </h1>
            <div>
              <ul className="mt-2">
                {sectionLinks.map((item) => (
                  <li key={item.name} className="mb-2">
                    <a href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h1 className={headingClass}>
              CONTACT
            </h1>
            <p className="mt-2">Reach us at address@gmail.com</p>
            <span className="flex mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  // className="inline-block cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div className="flex flex-col text-xs md:text-base md:flex-row mt-3">            
              <p className="mt-2 md:mt-0 md:order-first">Made with lots of fuel by the FormulaTech Hacks Team&nbsp;🔥</p>
              <p className="order-first md:ml-auto">© {currentYear} FormulaTechHacks</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}