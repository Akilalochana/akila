import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb, FaUsers, FaGraduationCap, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
  { name: "Next.js", level: 85, color: "bg-black" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "Express.js", level: 75, color: "bg-gray-600" },
  { name: "MongoDB", level: 70, color: "bg-green-600" },
  { name: "MySQL", level: 75, color: "bg-blue-600" },
  { name: "Kotlin", level: 65, color: "bg-purple-500" },
  { name: "firebase", level: 90, color: "bg-cyan-500" },
  { name: "supabase", level: 85, color: "bg-indigo-500" }
];

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    period: "2023 - Present",
    institution: "Informatics Institute of Technology",
    status: "Ongoing",
    icon: FaGraduationCap
  },
  {
    degree: "GCE Advanced Level (A/L)",
    period: "2022",
    institution: "Central College Anuradhapura",
    status: "3 Credits in Mathematics Stream",
    icon: FaGraduationCap
  },
  {
    degree: "GCE Ordinary Level (O/L)",
    period: "2019",
    institution: "Central College Anuradhapura",
    status: "8 A's Achievement",
    icon: FaGraduationCap
  }
];

const technicalSkills = {
  frontend: ["HTML", "CSS", "React", "Next.js", "Kotlin"],
  backend: ["Node.js", "Express.js", "Next.js", "Kotlin"],
  databases: ["MySQL", "MongoDB", "Firebase", "Supabase"],
};

const stats = [
  { number: "10+", label: "Projects Completed", icon: FaCode },
  { number: "3+", label: "Years Learning", icon: FaRocket },
  { number: "8A's", label: "O/L Achievement", icon: FaGraduationCap },
  { number: "100%", label: "Passion Level", icon: FaHeart }
];

const About = () => {
  return (
    <motion.section
      className="py-10 px-4 bg-gradient-to-br from-gray-50 to-white rounded-[32px]"
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <motion.div
          className="text-center mb-8 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-2xl text-gray-600 max-w-2xl mx-auto ">
            Crafting impactful digital experiences with fullstack development and Generative AI.
          </h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image & Info */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative inline-block">
              <img 
                className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl border-8 border-white"
                src="./mylogo.jpg" 
                alt="Profile" 
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-4 rounded-2xl shadow-lg">
                <FaCode className="text-3xl" />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                
                Hello, I'm a Computer Science Student at IIT
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Computer Science student currently pursuing my BSc (Hons) at 
                Informatics Institute of Technology. My journey in technology began with strong 
                academic foundations, achieving 8 A's in O/L and 3 Credits in A/L Mathematics Stream.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Specializing in full-stack development with modern technologies like React, Next.js, 
                and Node.js, I'm dedicated to creating innovative web applications and mobile solutions. 
                My expertise spans both frontend and backend development, with hands-on experience in 
                databases and modern development frameworks.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200">
                <span className="text-emerald-700 font-medium">🎓 IIT Student</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                <span className="text-blue-700 font-medium">🌍 Sri Lanka</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
                <span className="text-purple-700 font-medium">⭐ 8 A's O/L Graduate</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <stat.icon className="text-4xl text-emerald-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
  Educational Background
</h3>

{/* View Certificates Button */}
<div className="flex justify-center mb-6">
  <a
    href="./AL_certificate.pdf" // Update the path to your actual file
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-50 px-5 py-2 rounded-full border border-yellow-200 hover:bg-yellow-100 transition-colors text-yellow-700 font-medium"
  >
    📄 View O/L & A/L Certificates
  </a>
</div>

<div className="space-y-6">
  {education.map((edu, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-emerald-100 p-3 rounded-full">
          <edu.icon className="text-2xl text-emerald-600" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
            <span className="text-emerald-600 font-semibold">{edu.period}</span>
          </div>
          <p className="text-gray-600 font-medium mb-1">{edu.institution}</p>
          <p className="text-gray-500">{edu.status}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Technical Skills
          </h3>
          
          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaCode className="text-2xl text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Frontend</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {technicalSkills.frontend.map((skill, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaRocket className="text-2xl text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Backend</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {technicalSkills.backend.map((skill, index) => (
                  <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FaUsers className="text-2xl text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Databases</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {technicalSkills.databases.map((skill, index) => (
                  <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to work together?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-[#20cf43] text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">Get In Touch</Link>
              
            </motion.button>
            <motion.button
              className="border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                            
               href="./Akila_Lochan_CV.pdf" // Update the path to your actual file
               target="_blank"
               rel="noopener noreferrer">
                            
              Download CV
                            
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;