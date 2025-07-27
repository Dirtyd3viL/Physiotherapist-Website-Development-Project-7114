import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiLinkedin, FiInstagram, FiMessageCircle, FiActivity, FiHeart } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Stories', href: '/testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Musculoskeletal Treatment',
    'Sports Injury Recovery',
    'Kinesio Taping',
    'Post-Surgery Rehab',
    'Pain Management',
    'Posture Correction'
  ];

  const contactInfo = [
    {
      icon: FiMapPin,
      text: 'Andheri West, Mumbai',
      subtext: 'Maharashtra, India'
    },
    {
      icon: FiPhone,
      text: '+91 98765 43210',
      subtext: 'Call anytime'
    },
    {
      icon: FiMail,
      text: 'hello@drsamiksha.com',
      subtext: 'Quick response'
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: FiInstagram,
      href: '#',
      label: 'Instagram',
      color: 'hover:bg-pink-500'
    },
    {
      icon: FiMessageCircle,
      href: '#',
      label: 'WhatsApp',
      color: 'hover:bg-green-500'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <SafeIcon icon={FiActivity} className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-30 blur"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Dr. Samiksha
                </h3>
                <p className="text-blue-300 font-medium">PhysioExpert</p>
              </div>
            </div>
            
            <p className="text-blue-100 mb-8 leading-relaxed">
              Transforming lives through expert physiotherapy care. 
              Your journey to wellness starts here.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-blue-200 text-sm flex items-center group">
                  <SafeIcon icon={FiHeart} className="w-3 h-3 mr-3 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get in Touch
            </h4>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <SafeIcon icon={info.icon} className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{info.text}</p>
                    <p className="text-blue-300 text-sm">{info.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h5 className="font-bold text-white mb-3">Clinic Hours</h5>
              <p className="text-blue-200 text-sm mb-1">Mon-Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-blue-200 text-sm">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 lg:mb-0">
              © {currentYear} Dr. Samiksha Dandekar. Crafted with care for your wellness.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300">
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;