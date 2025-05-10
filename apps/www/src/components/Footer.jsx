import "bootstrap-icons/font/bootstrap-icons.css";
const currentYear = new Date().getFullYear();

const footerLinks = {
  about: [
    { name: 'Our Mission', href: '/mission' },
    { name: 'Team', href: '/team' },
    { name: 'Partners & Sponsors', href: '/partners' },
    { name: 'Blog', href: '/blog' }
  ],

  events: [
    { name: 'Upcoming Hackathons', href: '/events' },
    { name: 'Past Events', href: '/past-events' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Prize & Awards', href: '/prizes' }
  ],

  resources: [
    { name: 'Getting Started', href: '/start' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Community', href: '/community' }
  ]
};

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
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-7xl mx-auto px-4 py-12 gap-8 lg:gap-0">
        {/* Logo placeholder */}
        <div className="flex-shrink-0 w-48 h-48 bg-white rounded-md border border-gray-200 flex items-center justify-center mb-8 lg:mb-0 lg:mr-12">
          {/* Logo goes here */}
        </div>
        {/* Title and lines */}
        <div className="flex flex-col items-center lg:items-start w-full">
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono text-gray-900 leading-none text-center lg:text-left">
            FormulaTech<br />Hacks
          </div>
          <div className="mt-12 w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
            {/* Left line */}
            <div className="hidden md:block w-64 border-t-2 border-black mt-4" />
            {/* Center lines */}
            <div className="flex flex-col gap-8 w-full max-w-md">
              <div className="w-full border-t-2 border-black" />
              <div className="w-full border-t-2 border-black" />
            </div>
            {/* Right line */}
            <div className="hidden md:block w-64 border-t-2 border-black mt-4" />
          </div>
        </div>
      </div>
      {/* Social icons centered at the bottom */}
      <div className="w-full flex justify-center pb-8">
        <div className="flex space-x-4 bg-[#e6f3f3] px-2 py-1 rounded-md">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="inline-block cursor-pointer hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-2xl text-black bg-[#b2d8df] hover:bg-[#a0cfd6] transition-colors">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
