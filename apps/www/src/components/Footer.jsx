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


 {/* <div className="">
              <svg width="100%" height="120" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d2273d" />
                    <stop offset="100%" stopColor="#00aeb9" />
                  </linearGradient>
                </defs>

                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Orbitron, sans-serif"
                  fontSize="64"
                  fontWeight="bold"
                  fill="none"
                  stroke="url(#gradStroke)"
                  strokeWidth="18"
                  strokeLinejoin="round"
                >
                  FORMULATECH HACKS
                </text>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Orbitron, sans-serif"
                  fontSize="64"
                  fontWeight="bold"
                  fill="white"
                >
                  FORMULATECH HACKS
                </text>
              </svg>
            </div> */}



// className="font-black p-5 -ml-2.5 text-5xl capitalize text-white bg-clip-text bg-gradient-to-r from-primary to-secondary stroke-xl font-title"

    // <footer className="relative bg-[#D2273D] min-h-[60vh] flex flex-col justify-between border-t border-white">
    //   {/* Main content */}
    //   <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl mx-auto px-4 py-20 gap-8 lg:gap-0">
    //     {/* Logo placeholder */}
    //     <div className="flex-shrink-0 w-48 h-48 rounded-m flex items-center justify-center mb-8 lg:mb-0 lg:mr-12">
    //       <img src="/ft_submark_logo.png" alt="FormulaTech FT Submark Logo" className="w-40 h-40 object-contain" />
    //     </div>
        
    //     {/* Title and sections */}
        
    //     <div className="flex flex-col items-center lg:items-start w-full">
    //       <div
    //         className="text-4xl sm:text-4.5xl md:text-5.5xl font-bold tracking-wide text-white leading-tight text-center lg:text-left mb-12"
    //         style={{ fontFamily: "'Orbitron', 'Exo', 'monospace', 'sans-serif'" }}
    //       >
    //         FormulaTech<br />Hacks
    //       </div>
    //       <div className="inline-grid lg:grid w-auto lg:w-full grid-cols-1 md:grid-cols-3 gap-y-14 sm:gap-y-10 gap-x-20 sm:gap-x-26 md:gap-x-40 mx-auto sm:mx-12 md:mx-6 place-items-center md:place-items-start justify-center self-center">
    //         {mainSections.map((section) => (
    //           <div key={section.heading} className="flex flex-col items-center md:items-start text-center md:text-left">
    //             <h4 className="text-lg font-semibold mb-4 text-white">{section.heading}</h4>
    //             <ul className="space-y-2">
    //               {section.items.map((item) => (
    //                 <li key={item.name}>
    //                   <a href={item.href} className="text-white hover:text-gray-900 transition-colors text-base" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
    //                     {item.name}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   {/* Bottom bar with social icons and side sections */}
    //   <div className="w-full flex flex-row items-center justify-center gap-80 px-10 pb-8 mt-8">
    //     {/* Left bottom section */}
    //     <a href={bottomSections[0].href} className="text-white hover:text-gray-900 text-base font-medium transition-colors">
    //       {bottomSections[0].name}
    //     </a>
    //     {/* Social icons centered */}
    //     <div className="flex space-x-4 px-2 py-1 rounded-md">
    //       {socialLinks.map((social) => (
    //         <a
    //           key={social.name}
    //           href={social.href}
    //           className="inline-block cursor-pointer hover:opacity-80"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-lg text-black hover:bg-[#a0cfd6] transition-colors">
    //             {social.icon}
    //           </div>
    //         </a>
    //       ))}
    //     </div>
    //     {/* Right bottom section */}
    //     <a href={bottomSections[1].href} className="text-white hover:text-gray-900 text-base font-medium transition-colors">
    //       {bottomSections[1].name}
    //     </a>
    //   </div>
    // </footer>