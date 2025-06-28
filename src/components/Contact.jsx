import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.section
    className="contact"
    id="contact"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
  >
    <h2 className="contact-title">Contact</h2>
    <p>Feel free to reach out via email or connect with me on social media!</p>
    <div className="contact-links">
      <a className="contact-link" href="mailto:your.email@example.com">Email</a>
      <a className="contact-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a className="contact-link" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </motion.section>
);

export default Contact; 