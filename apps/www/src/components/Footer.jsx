import "bootstrap-icons/font/bootstrap-icons.css";
const currentYear = new Date().getFullYear();

const mainSections = [
  {
    heading: "About",
    items: [
      { name: "Our Mission", href: "/mission" },
      { name: "Team", href: "/team" },
      { name: "Partners", href: "/partners" },
    ],
  },
  {
    heading: "Events",
    items: [
      { name: "Upcoming", href: "/events" },
      { name: "Past Events", href: "/past-events" },
      { name: "Schedule", href: "/schedule" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { name: "Getting Started", href: "/start" },
      { name: "Documentation", href: "/docs" },
      { name: "Community", href: "/community" },
    ],
  },
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
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
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
    <footer className="relative bg-[#fcfcee] min-h-[60vh] flex flex-col justify-between border border-[#f3f3e6]">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl mx-auto px-4 py-20 gap-8 lg:gap-0">
        {/* Logo placeholder */}
        <div className="flex-shrink-0 w-48 h-48 bg-white rounded-md border border-gray-200 flex items-center justify-center mb-8 lg:mb-0 lg:mr-12">
          {/* FT Submark Logo SVG */}
          <svg width="90%" height="90%" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" aria-labelledby="ftLogoTitle">
            <title id="ftLogoTitle">FormulaTech FT Submark Logo</title>
            <g>
              <g>
                <g>
                  <path fill="#fb2c46" d="M219.81,545.83c-4.86,0-9.92-.64-15.02-1.91l-17.01-4.22,1.96-17.42c1.24-11.02,2.39-22.52,3.51-33.65,2.4-23.91,4.88-48.63,8.51-72.24,4.39-28.55,15.5-52.14,33.01-70.09,16.7-17.12,39.41-29.25,67.51-36.04l.51-.12,278.74-52.21-1.58,25.61c-3.02,49.1-32.67,92.51-77.36,113.31l-25.39,11.82-2.93-27.85c-2.35-22.29-20.76-26.96-35.79-26.96-1.53,0-3.11.05-4.69.16-37.65,2.55-94.35,19.59-118.74,40.91-30.28,26.47-33.2,44.59-39,80.68-1.07,6.63-2.17,13.48-3.54,21.03-5.53,30.34-25.71,49.19-52.68,49.19Z"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        {/* Title and sections */}
        <div className="flex flex-col items-center lg:items-start w-full">
          <div
            className="text-4xl sm:text-4.5xl md:text-5.5xl font-normal tracking-wide text-black leading-tight text-center lg:text-left mb-12"
            style={{ fontFamily: "'Orbitron', 'Exo', 'monospace', 'sans-serif'" }}
          >
            FormulaTech<br />Hacks
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
            {mainSections.map((section) => (
              <div key={section.heading} className="flex flex-col items-center md:items-start">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">{section.heading}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors text-base" target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
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
        <a href={bottomSections[0].href} className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors">
          {bottomSections[0].name}
        </a>
        {/* Social icons centered */}
        <div className="flex space-x-4 bg-[#e6f3f3] px-2 py-1 rounded-md">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="inline-block cursor-pointer hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-lg text-black bg-[#b2d8df] hover:bg-[#a0cfd6] transition-colors">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
        {/* Right bottom section */}
        <a href={bottomSections[1].href} className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors">
          {bottomSections[1].name}
        </a>
      </div>
    </footer>
  );
}

