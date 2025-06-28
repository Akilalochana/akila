import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio Website",
    desc: "A personal portfolio website to showcase my skills and projects.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "E-commerce Store",
    desc: "A full-stack e-commerce application with shopping cart and payment integration.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "Chat App",
    desc: "A real-time chat application using React and Socket.io.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "#"
  }
];

const Projects = () => (
  <motion.section
    className="projects"
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
  >
    <h2 className="projects-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <img className="project-img" src={project.img} alt={project.title} />
          <div className="project-title">{project.title}</div>
          <div className="project-desc">{project.desc}</div>
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Projects; 