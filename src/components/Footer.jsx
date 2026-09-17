import { FaXTwitter, FaTelegram, FaDiscord, FaMedium, FaFacebookF } from 'react-icons/fa6';
import { FiMessageCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Footer column data
  const columns = [
    {
      title: 'About us',
      links: [
        { label: 'InterLink Foundation', href: '#' },
        { label: 'Whitepaper', href: '#' },
        { label: 'Ambassador', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Resource',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms and Conditions', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
    {
      title: 'Address',
      isAddress: true,
      address: '895 Dove Street, Suite 300, Newport Beach, CA 92660, USA',
    },
  ];

  // Social icons
  const socials = [
    { icon: FaXTwitter, label: 'X (Twitter)', href: '#' },
    { icon: FaTelegram, label: 'Telegram', href: '#' },
    { icon: FaDiscord, label: 'Discord', href: '#' },
    { icon: FiMessageCircle, label: 'Chat', href: '#' },
    { icon: FaMedium, label: 'Medium', href: '#' },
    { icon: FaFacebookF, label: 'Facebook', href: '#' }
  ];

  return (
    <footer className="w-full bg-[#FCFBFF] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20">

        {/* --- Top: Three Columns --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-20 mb-12">

          {columns.map((column, index) => (
            <div key={index}>
              {/* Column Title */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-5">
                {column.title}
              </h3>

              {/* Address */}
              {column.isAddress ? (
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
                  {column.address}
                </p>
              ) : (
                /* Links */
                <ul className="flex flex-col gap-3">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <Link to="/wallet"
                        href={link.href}
                        className="text-sm md:text-base text-gray-600 hover:text-[#6B5AED] transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>

        {/* --- Middle: Social Icons --- */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link to="/wallet"
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F5F5F7] hover:bg-[#EEECFD] hover:text-[#6B5AED] text-gray-700 flex items-center justify-center transition"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>

      </div>

      {/* --- Bottom: Copyright Bar --- */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <p className="text-sm md:text-base text-gray-500">
            © 2026 InterLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;