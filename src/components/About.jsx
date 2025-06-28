import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    className="about"
    id="about"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    <img className="about-img" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
    <div className="about-bio">
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with experience in building modern web applications using React, JavaScript, and other technologies. I love solving problems and creating impactful digital products.
      </p>
    </div>
  </motion.section>
);

export default About; 