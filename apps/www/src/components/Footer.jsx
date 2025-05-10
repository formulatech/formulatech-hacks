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
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/formulatech-hacks/posts/?feedView=all',
    icon: <i className="bi bi-linkedin" />
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/formulatech.hacks/',
    icon: <i className="bi bi-instagram" />
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#fdf6e3] text-gray-600">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3">
              {/* Logo placeholder */}
              <div className="w-10 h-10 bg-gray-800/10 rounded-lg flex items-center justify-center">
                <div />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Formulatech
              </span>
            </div>
            <p className="mt-4 text-gray-600 max-w-sm">
              Empowering the next generation of innovators through collaborative hackathons and tech events.
            </p>
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="inline-block cursor-pointer hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center justify-center">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                About
              </h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Events
              </h3>
              <ul className="space-y-3">
                {footerLinks.events.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm hover:text-gray-900 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-600 text-center sm:text-left">
            &copy; {currentYear} Formulatech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm">
            <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-gray-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
