"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {
      name: "Academics",
      href: "#",
      dropdown: [
        { name: "Programs", href: "#programs" },
        { name: "Departments", href: "#departments" },
        { name: "Faculty", href: "#faculty" },
      ],
    },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-glass-dark backdrop-blur-xl border-b border-white/10 shadow-premium py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
             <svg viewBox="0 0 40 40" className="w-8 h-8">
               <path fill="#2c5530" d="M20 10 L15 32 L20 25 L30 32 Z"/>
             </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Greenwood <span className="text-accent-gold">High</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.dropdown ? link.name : null)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="text-white/90 hover:text-accent-gold font-medium transition-colors flex items-center gap-1 py-2"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-premium border border-black/5 py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-primary hover:bg-primary/5 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="#admissions"
            className="bg-accent-gold text-primary hover:bg-white px-6 py-2 rounded-full font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-accent-gold/20"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary border-b border-white/10 p-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="text-white text-lg font-medium block"
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/10">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white/70 hover:text-accent-gold transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="#admissions"
              className="bg-accent-gold text-primary px-6 py-3 rounded-xl font-bold text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
