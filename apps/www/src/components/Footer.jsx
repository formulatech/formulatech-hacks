import "bootstrap-icons/font/bootstrap-icons.css";
const currentYear = new Date().getFullYear();

const mainSections = [
  {
    heading: "About",
    items: [
      { name: "Our Mission", href: "#" },
      { name: "Team", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  {
    heading: "Events",
    items: [
      { name: "Upcoming", href: "#" },
      { name: "Past Events", href: "#" },
      { name: "Schedule", href: "#" },
    ],
  },
  // {
  //   heading: "Resources",
  //   items: [
  //     { name: "Getting Started", href: "#" },
  //     { name: "Documentation", href: "#" },
  //     { name: "Community", href: "#" },
  //   ],
  // },
  {
    heading: "Contact",
    items: [
      { name: "Email", href: "mailto:info@formulatech.com" },
      { name: "Instagram", href: "https://www.instagram.com/formulatech.hacks/" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/formulatech-hacks/posts/?feedView=all" },
    ],
  },
];

const bottomSections = [
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
];

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:info@formulatech.com',
    icon: <i className="bi bi-envelope" />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/formulatech.hacks/',
    icon: <i className="bi bi-instagram" />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/formulatech-hacks/posts/?feedView=all',
    icon: <i className="bi bi-linkedin" />
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#D2273D] min-h-[60vh] flex flex-col justify-between border-t border-white">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl mx-auto px-4 py-20 gap-8 lg:gap-0">
        {/* Logo placeholder */}
        <div className="flex-shrink-0 w-48 h-48 rounded-m flex items-center justify-center mb-8 lg:mb-0 lg:mr-12">
          <img src="/ft_submark_logo.png" alt="FormulaTech FT Submark Logo" className="w-40 h-40 object-contain" />
        </div>
        
        {/* Title and sections */}
        
        <div className="flex flex-col items-center lg:items-start w-full">
          <div
            className="text-4xl sm:text-4.5xl md:text-5.5xl font-bold tracking-wide text-white leading-tight text-center lg:text-left mb-12"
            style={{ fontFamily: "'Orbitron', 'Exo', 'monospace', 'sans-serif'" }}
          >
            FormulaTech<br />Hacks
          </div>
          <div className="inline-grid lg:grid w-auto lg:w-full grid-cols-1 md:grid-cols-3 gap-y-14 sm:gap-y-10 gap-x-20 sm:gap-x-26 md:gap-x-40 mx-auto sm:mx-12 md:mx-6 place-items-center md:place-items-start justify-center self-center">
            {mainSections.map((section) => (
              <div key={section.heading} className="flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-lg font-semibold mb-4 text-white">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-white hover:text-gray-900 transition-colors text-base" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom bar with social icons and side sections */}
      <div className="w-full flex flex-row items-center justify-center gap-80 px-10 pb-8 mt-8">
        {/* Left bottom section */}
        <a href={bottomSections[0].href} className="text-white hover:text-gray-900 text-base font-medium transition-colors">
          {bottomSections[0].name}
        </a>
        {/* Social icons centered */}
        <div className="flex space-x-4 px-2 py-1 rounded-md">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="inline-block cursor-pointer hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-lg text-black hover:bg-[#a0cfd6] transition-colors">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
        {/* Right bottom section */}
        <a href={bottomSections[1].href} className="text-white hover:text-gray-900 text-base font-medium transition-colors">
          {bottomSections[1].name}
        </a>
      </div>
    </footer>
  );
}

