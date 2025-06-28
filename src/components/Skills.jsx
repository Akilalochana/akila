import React from "react";
import { motion } from "framer-motion";

const skills = [
  "ReactJS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "Figma",
  "TypeScript"
];

const Skills = () => (
  <motion.section
    className="skills"
    id="skills"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <h2 className="skills-title">Skills</h2>
    <div className="skills-list">
      {skills.map((skill, idx) => (
        <div className="skill-item" key={idx}>{skill}</div>
      ))}
    </div>
  </motion.section>
);

export default Skills; 