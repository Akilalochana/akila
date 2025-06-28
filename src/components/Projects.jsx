import React, { useState, useEffect } from "react";
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

// Hero banner slides data
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
    title: "Welcome to My Portfolio",
    subtitle: "Full Stack Developer & UI/UX Designer",
    description: "Creating amazing digital experiences with modern technologies"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "Innovative Solutions",
    subtitle: "Web Development & Design",
    description: "Building responsive and user-friendly applications"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    title: "Creative Projects",
    subtitle: "Frontend & Backend Excellence",
    description: "Turning ideas into reality with cutting-edge technology"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    title: "Let's Work Together",
    subtitle: "Available for Freelance Projects",
    description: "Ready to bring your vision to life with professional development"
  }
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <>
      <motion.section
        className="relative h-[310px] overflow-hidden "
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Image Slider Container */}
        <div className="relative w-full h-[300px] rounded-[32px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`
              }}
            >
              <div className="text-center text-white max-w-4xl px-5 z-10">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index === currentSlide ? 0.2 : 0 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.h2
                  className="text-xl md:text-3xl font-light mb-4 text-gray-100 drop-shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index === currentSlide ? 0.4 : 0 }}
                >
                  {slide.subtitle}
                </motion.h2>
                <motion.p
                  className="text-base md:text-xl leading-relaxed opacity-90 drop-shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: index === currentSlide ? 0.6 : 0 }}
                >
                  {slide.description}
                </motion.p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border-none text-white text-2xl md:text-3xl p-3 md:p-4 cursor-pointer z-30 transition-all duration-300 hover:bg-white/30 rounded-full"
            onClick={prevSlide}
          >
            &#8249;
          </button>
          <button 
            className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border-none text-white text-2xl md:text-3xl p-3 md:p-4 cursor-pointer z-30 transition-all duration-300 hover:bg-white/30 rounded-full"
            onClick={nextSlide}
          >
            &#8250;
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-2 border-white cursor-pointer transition-all duration-300 hover:bg-white/70 ${
                  index === currentSlide ? 'bg-white' : 'bg-transparent'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </motion.section>

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


    </>
  );
};

export default Projects;