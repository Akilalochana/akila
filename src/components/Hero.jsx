import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Globe, ExternalLink, Github } from "lucide-react";

import { FaLinkedin, FaGithub, FaMedium, FaStackOverflow, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { a, span } from "framer-motion/client";
import { Link } from "react-router-dom";


const Hero = () => {
  const skills = [
    { name: "React", icon: <Code className="w-8 h-8" />, level: 90 },
    { name: "JavaScript", icon: <Code className="w-8 h-8" />, level: 85 },
    { name: "CSS/SCSS", icon: <Palette className="w-8 h-8" />, level: 88 },
    { name: "TypeScript", icon: <Code className="w-8 h-8" />, level: 80 },
    { name: "Next.js", icon: <Globe className="w-8 h-8" />, level: 82 },
    { name: "Responsive Design", icon: <Smartphone className="w-8 h-8" />, level: 92 }
  ];

  const projects = [
    {
      id: 1,
      title: "Hotel Booking Web Application | MERN Stack",
      description: "Developed a fullstack hotel booking platform using MongoDB, Express, React, and Node.js with",
      image: "./hotel.png",
      tags: ["React", "javaScript", "Tailwind","MongoDB", "genarative AI"],
      demoLink: "https://hotel-rooms-booking-frontend-mern.vercel.app/",
      githubLink: "https://github.com/Akilalochana/Hotel-booking-frontend-MERN"
    },
    {
      id: 2,
      title: "BirthdayCard Selling Web App | MERN Stack",
      description: "An e-commerce platform to create, customize, and sell birthday cards. The app supports two user roles",
      image: "./birthday.png",
      tags: ["React", "Tailwind", "CSS3", "Node.js", "Express.js", "MongoDB"],
      demoLink: "https://cey-trend-frontend.vercel.app/",
      githubLink: "https://github.com/Akilalochana/CeyTrend-frontend"
    },
    {
      id: 3,
      title: "Mobile App | Kotlin | IIT Cutting Edge 2025 – 1st Place 🏆",
      description: "Responsive portfolio showcasing modern web development techniques and animations.",
      image: "./groupphoto.jpg",
      tags: ["AR", "kotlin", "Firebase", "CI/CD", "GitHub Actions", "AR Model", ],
      demoLink: "https://youtu.be/WPl7Ob-SBwA?si=0Lvb7helWcMj1Oyt",
      githubLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
     

      <motion.section
      className="hero py-20 px-6"
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-40">
        {/* Left Side Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left  ">
          <motion.h1 
            className="text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm Akila Lochana
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I'm a fullstack developer working on cool projects with AI and automating boring research work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a 
              
              href="./Akila_Lochan_CV.pdf" // Update the path to your actual file
              target="_blank"
              rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg cursor-pointer hover:bg-green-600 transition-colors text-lg font-medium bg-green-500">
                download CV
              </button>
            </a>


          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center lg:justify-start gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/akilalochana/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-blue-700 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://github.com/Akilalochana" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-800 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://medium.com/@akilalochana7" target="_blank" rel="noopener noreferrer">
              <FaMedium className="text-2xl text-black hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://meta.stackexchange.com/users/1774695/akila-lochana" target="_blank" rel="noopener noreferrer">
              <FaStackOverflow className="text-2xl text-orange-500 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://devpost.com/akilalochana7?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
              <SiDevpost className="text-2xl text-blue-600 hover:scale-110 transition-transform duration-300" />
            </a>

            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-blue-600 hover:scale-110 transition-transform duration-300" />
            </a>

            <a href="https://x.com/aki32726" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-blue-400 hover:scale-110 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Side Profile Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img 
            className="w-100 h-100 rounded-2xl object-cover shadow-2xl" 
            src="./mylogo.jpg" 
            alt="Profile" 
          />
        </motion.div>
      </div>
    </motion.section>

      

      {/* Projects Section */}
      <motion.section 
        className="hero"
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Some of my Projects
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Some of my recent work that showcases my skills and creativity
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <a 
                        href={project.demoLink}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </a>
                      <a 
                        href={project.githubLink}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                    <Link
                      to="/projects"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      see more
                    </Link>
                  </p>

                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#20cf43] text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
              <Link to="/projects">View All Projects</Link>
            </button>
          </motion.div>
        </div>
      </motion.section>

      
    </div>
  );
};

export default Hero;