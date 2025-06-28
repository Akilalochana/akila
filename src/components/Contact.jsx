import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-white to-gray-50 rounded-[32px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I'm always open to discussing new opportunities, collaborations, or simply chatting about tech. Feel free to reach out!
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:your.email@example.com"
            className="bg-emerald-500 text-white px-6 py-4 rounded-full font-medium shadow-lg hover:bg-emerald-600 transition-all duration-300"
          >
            📧 your.email@example.com
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-emerald-500 text-emerald-500 px-6 py-4 rounded-full font-medium hover:bg-emerald-500 hover:text-white transition-all duration-300"
          >
            📄 Download CV
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-3xl hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-3xl hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-emerald-500 text-3xl hover:scale-110 transition-transform"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
