import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection on scroll
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(href);
      setIsOpen(false);
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center space-x-2 group"
          id="brand-logo"
        >
          <div className="h-10 w-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-display font-bold text-lg shadow-sm group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-all">
            SS
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white tracking-tight leading-none group-hover:text-teal-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-1">
              People Operations
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`font-sans text-sm font-medium transition-all duration-200 relative py-1 ${
                activeSection === link.href
                  ? "text-teal-400 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center" id="nav-cta">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="inline-flex items-center space-x-1.5 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/20 font-sans text-sm font-medium py-2.5 px-5 rounded-lg shadow-sm hover:shadow transition-all group"
          >
            <span>Let's Connect</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-[#030712]/95 backdrop-blur-lg border-b border-slate-800/80 shadow-lg overflow-hidden absolute top-full left-0 right-0"
          >
            <div className="px-6 py-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`font-sans text-base font-medium py-2 border-b border-slate-800/50 transition-colors ${
                    activeSection === link.href
                      ? "text-teal-400 font-semibold pl-2 border-l-2 border-l-teal-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, "#contact")}
                  className="w-full text-center inline-flex items-center justify-center space-x-1.5 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/20 font-sans text-sm font-medium py-3 px-5 rounded-lg shadow-sm transition-all"
                >
                  <span>Let's Connect</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
