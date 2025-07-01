import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Me" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar-modern"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-logo-group">
        {/* Placeholder SVG logo */}
        <span className="navbar-logo-text text-[#20cf43]">Akila Lochana</span>
      </div>
      {/* Hamburger Icon for mobile */}
      <button
        className="navbar-hamburger md:hidden"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`hamburger-bar${menuOpen ? " open" : ""}`}></span>
        <span className={`hamburger-bar${menuOpen ? " open" : ""}`}></span>
        <span className={`hamburger-bar${menuOpen ? " open" : ""}`}></span>
      </button>
      {/* Desktop Nav Links */}
      <div className="navbar-links-modern hidden md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`navbar-link-modern${location.pathname === link.to ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
            {location.pathname === link.to && <span className="navbar-underline" />}
          </Link>
        ))}
      </div>
      <a href="#contact" className="navbar-cta hidden md:flex"><Link to="/contact">Get In Touch</Link></a>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar-link-modern block py-3 px-4 text-lg${location.pathname === link.to ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {location.pathname === link.to && <span className="navbar-underline" />}
              </Link>
            ))}
            <a href="#contact" className="navbar-cta block mt-4">get in touch</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 