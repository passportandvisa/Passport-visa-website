import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Passport Services', path: '/passport-services' },
    { name: 'Visa Services', path: '/visa-services' },
    { name: 'Process', path: '/process' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const passportServices = [
    { name: 'New Passport', path: '/passport-agent-pune' },
    { name: 'Tatkal Passport', path: '/tatkal-passport-pune' },
    { name: 'Passport Renewal', path: '/passport-renewal-pune' },
    { name: 'Lost Passport', path: '/lost-passport-pune' },
    { name: 'Minor Passport', path: '/minor-passport-pune' },
  ];

  const visaServices = [
    { name: 'Schengen Visa', path: '/schengen-visa-pune' },
    { name: 'USA Visa', path: '/usa-visa-consultant-pune' },
    { name: 'Dubai Visa', path: '/dubai-visa-pune' },
    { name: 'Business Visa', path: '/visa-consultant-pune' },
    { name: 'Tourist Visa', path: '/visa-consultant-pune' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                I MAX <span className="text-brand-red">PASSPORT AND VISA ASSISTANCE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium passport and visa assistance services in Pune. We provide expert documentation guidance for all your international travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-red transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Passport</h5>
                <ul className="space-y-3 text-sm">
                  {passportServices.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="hover:text-brand-red transition-colors">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-red shrink-0" size={18} />
                <a 
                  href="https://share.google/lAZEemNVU0cZa8McT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors"
                >
                  Pune, Maharashtra, India
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-red shrink-0" size={18} />
                <span>+91-8766993798</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-red shrink-0" size={18} />
                <span>imaxpassport@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© {currentYear} I Max Passport and Visa Assistance. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
