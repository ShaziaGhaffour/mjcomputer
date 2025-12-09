import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Music2, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/products', label: 'All Products', icon: '📦' },
    { to: '/about', label: 'About Us', icon: 'ℹ️' },
    { to: '/contact', label: 'Contact', icon: '📞' },
    { to: '/privacy', label: 'Privacy Policy', icon: '🔒' },
    { to: '/terms', label: 'Terms & Conditions', icon: '📄' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
    { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
    { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
    { href: 'https://tiktok.com', icon: Music2, label: 'TikTok' },
  ];

  return (
    <footer className="bg-[#001F3F] border-t border-gray-600 text-gray-300">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center shadow">
                <span className="text-2xl font-bold text-white font-display">MJ</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">MJ Computer</h3>
                <p className="text-sm">Premium Tech Store</p>
              </div>
            </div>

            <p className="text-sm" style={{ width: "378px" }}>
              Your trusted destination for high-quality laptops, desktop computers, premium accessories, and cutting-edge technology solutions in Lahore — delivering reliable products, amazing deals, and exceptional customer support to help you upgrade your tech lifestyle with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 px-2 py-1.5 text-sm border border-transparent 
                    hover:border-yellow-400 hover:bg-yellow-400/20 text-gray-200 hover:text-yellow-300 
                    rounded-md transition-all duration-200"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0 transition-colors hover:text-yellow-400" />
                <span>Shop No #22-G, Ground Floor, IT Tower, Near Hafeez Centre, Lahore</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white flex-shrink-0 transition-colors hover:text-yellow-400" />
                <a
                  href="tel:+923214702737"
                  className="flex px-2 py-1.5 rounded-md border border-transparent
                  hover:border-yellow-400 hover:bg-yellow-400/20 hover:text-yellow-300 transition-all"
                >
                  +92 321 4702737
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white flex-shrink-0 transition-colors hover:text-yellow-400" />
                <a
                  href="tel:042-3-5711157"
                  className="flex px-2 py-1.5 rounded-md border border-transparent
                  hover:border-yellow-400 hover:bg-yellow-400/20 hover:text-yellow-300 transition-all"
                >
                  042-3-5711157
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white flex-shrink-0 transition-colors hover:text-yellow-400" />
                <a
                  href="mailto:Sale@Mjcomputers.pk"
                  className="flex px-2 py-1.5 rounded-md border border-transparent
                  hover:border-yellow-400 hover:bg-yellow-400/20 hover:text-yellow-300 transition-all"
                >
                  Sale@Mjcomputers.pk
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-600">
        <div className="container mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <p>© {new Date().getFullYear()} MJ Computer. All rights reserved.</p>

          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded bg-blue-800 flex items-center justify-center border border-transparent 
                hover:border-yellow-400 hover:bg-yellow-400/20 hover:text-yellow-300 transition-all"
              >
                <social.icon className="h-3.5 w-3.5 text-white transition-colors hover:text-yellow-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
