"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                 <svg viewBox="0 0 40 40" className="w-9 h-9">
                   <path fill="#2c5530" d="M20 10 L15 32 L20 25 L30 32 Z"/>
                 </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Greenwood <span className="text-accent-gold">High</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Nurturing tomorrow's leaders through excellence in education, character building, and innovative learning since 1950.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-primary transition-all"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-bold text-accent-gold mb-6 uppercase tracking-wider">Quick Links</h6>
            <ul className="space-y-4">
              {["Home", "About", "Academics", "Faculty", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h6 className="text-lg font-bold text-accent-gold mb-6 uppercase tracking-wider">Academics</h6>
            <ul className="space-y-4">
              {["Programs", "Departments", "Library", "Counseling", "Student Support"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-bold text-accent-gold mb-6 uppercase tracking-wider">Contact Info</h6>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/60">
                <MapPin size={20} className="text-accent-gold shrink-0" />
                <span>123 Education Drive, Greenwood, CA 90210</span>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <Phone size={20} className="text-accent-gold shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <Mail size={20} className="text-accent-gold shrink-0" />
                <span>info@greenwoodhigh.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Greenwood High School. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/40 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-sm">Terms of Service</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-accent-gold text-primary flex items-center justify-center shadow-lg shadow-black/20 hover:-translate-y-1 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
