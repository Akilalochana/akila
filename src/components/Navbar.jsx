import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Me" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <motion.nav
      className="navbar-modern "
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-logo-group">
        {/* Placeholder SVG logo */}
        
        <span className="navbar-logo-text text-[#20cf43]">Akila Lochana</span>
      </div>
      <div className="navbar-links-modern">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`navbar-link-modern${location.pathname === link.to ? " active" : ""}`}
          >
            {link.label}
            {location.pathname === link.to && <span className="navbar-underline" />}
          </Link>
        ))}
      </div>
      <a href="#contact" className="navbar-cta">Talk to me</a>
    </motion.nav>
  );
};

export default Navbar; 