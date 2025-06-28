import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hotel Booking Web Application | MERN Stack",
    subtitle: "Live Demo",
    description: "Developed a fullstack hotel booking platform using MongoDB, Express, React, and Node.js with secure JWT authentication, Google login, and role-based access control.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
    demoLink: "https://your-demo-link.com",
    githubLinks: {
      frontend: "https://github.com/yourusername/hotel-booking-frontend",
      backend: "https://github.com/yourusername/hotel-booking-backend"
    },
    specialLinks: {
      chatbot: "https://huggingface.co/your-chatbot",
      automation: "https://huggingface.co/your-automation"
    },
    features: [
      "RESTful API: Designed and implemented robust APIs for managing rooms, bookings, and user reviews",
      "Admin Dashboard: Enabled admins to add, update, or block rooms and users, and approve or moderate reviews",
      "Image Handling: Integrated Supabase for efficient and scalable image storage",
      "AI Integration: Deployed an AI powered chatbot using TinyLlama (RAG) and automated sentiment analysis for review moderation",
      "Automation: Reviews are automatically approved or sent to admin panel based on sentiment analysis",
      "Mobile Responsive: Ensured a seamless user experience across devices"
    ],
    tags: [
      "MERN Stack",
      "JWT Auth",
      "Google Login",
      "Role-Based Access",
      "Admin Dashboard",
      "Supabase",
      "AI Chatbot (TinyLlama)",
      "Sentiment Analysis",
      "Responsive Design"
    ]
  },
  {
    id: 2,
    title: "Property Search Web Application",
    subtitle: "React",
    description: "A responsive interface that allows users to search for properties by multiple criteria, including property type, price range, number of bedrooms and date added.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    demoLink: "#",
    githubLinks: {
      main: "https://github.com/Akilalochana/react-CW"
    },
    features: [
      "Advanced search functionality with multiple simultaneous filter criteria",
      "Responsive UI with responsive components for optimal display across devices",
      "Interactive property detail pages with responsive tabs for image galleries and property information"
    ],
    tags: ["React", "Responsive Design", "Search Functionality", "Property Management", "CSS3"]
  },
  {
    id: 3,
    title: "BirthdayCard Selling Web Application",
    subtitle: "MERN Stack | Live Demo",
    description: "An e-commerce platform to create, customize, and sell birthday cards. The app supports two user roles: Admin and User with comprehensive management features.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
    demoLink: "https://your-birthday-demo.com",
    githubLinks: {
      frontend: "https://github.com/yourusername/birthday-frontend",
      backend: "https://github.com/yourusername/birthday-backend"
    },
    features: [
      "Admin: Manage users, orders, products (cards), and site content",
      "User: Browse, personalize, and order birthday cards",
      "Secure login and dashboard access using JWT-based authentication for both admins and users"
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Tailwind CSS", "E-commerce"]
  },
  {
    id: 4,
    title: "Agriculture Based Mobile App",
    subtitle: "Kotlin | IIT Cutting Edge 2025 – 1st Place 🏆",
    description: "Developed an innovative agricultural price prediction system demonstrating profit potential in small-scale farming operations. Technical Lead & ML Developer role.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=250&fit=crop",
    demoLink: "https://your-demo-video.com",
    githubLinks: {
      main: "https://github.com/Akilalochana/Software-Development-Group-Project"
    },
    features: [
      "Engineered an Autoregressive (AR) prediction model achieving high accuracy in forecasting agricultural commodity prices",
      "Implemented Firebase backend for realtime data storage and retrieval with seamless Kotlin integration",
      "Established CI/CD pipeline using GitHub Actions for automated testing and deployment",
      "Project received 92% evaluation score and recommendation for academic publication"
    ],
    tags: ["Kotlin", "Machine Learning", "Firebase", "CI/CD", "GitHub Actions", "AR Model", "Agriculture Tech"],
    isAward: true,
    isDemoVideo: true
  }
];

// Hero banner slides data
const heroSlides = [
  {
    id: 1,
    image: "/groupphoto.jpg",
    title: "Best group work experience",
    subtitle: "Ceilao grid",
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
    image: "/groupphoto.jpg",
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
  const [expandedProject, setExpandedProject] = useState(null);

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

  const toggleProjectExpansion = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
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

      {/* Projects Section */}
      <motion.section
        className="projects py-16 px-4"
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Projects
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

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
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
                  {project.isAward && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                      <Trophy className="w-4 h-4" />
                      1st Place
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <a 
                        href={project.demoLink}
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                        title={project.isDemoVideo ? "Demo Video" : "Live Demo"}
                      >
                        {project.isDemoVideo ? (
                          <Video className="w-4 h-4 text-gray-700" />
                        ) : (
                          <ExternalLink className="w-4 h-4 text-gray-700" />
                        )}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 flex-1">{project.title}</h3>
                  </div>
                  {project.subtitle && (
                    <p className="text-blue-600 font-medium mb-3">{project.subtitle}</p>
                  )}
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Features Section */}
                  {project.features && (
                    <div className="mb-4">
                      <button 
                        onClick={() => toggleProjectExpansion(project.id)}
                        className="text-blue-600 hover:text-blue-800 font-medium mb-2 flex items-center gap-1"
                      >
                        {expandedProject === project.id ? 'Hide Details' : 'View Details'}
                        <span className={`transform transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                              • {feature}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Links Section */}
                  <div className="mb-4 space-y-2">
                    {project.githubLinks && (
                      <div className="flex flex-wrap gap-2">
                        {project.githubLinks.main && (
                          <a 
                            href={project.githubLinks.main}
                            className="inline-flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                          >
                            <Github className="w-3 h-3" />
                            GitHub
                          </a>
                        )}
                        {project.githubLinks.frontend && (
                          <a 
                            href={project.githubLinks.frontend}
                            className="inline-flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                          >
                            <Github className="w-3 h-3" />
                            Frontend
                          </a>
                        )}
                        {project.githubLinks.backend && (
                          <a 
                            href={project.githubLinks.backend}
                            className="inline-flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
                          >
                            <Github className="w-3 h-3" />
                            Backend
                          </a>
                        )}
                      </div>
                    )}
                    {project.specialLinks && (
                      <div className="flex flex-wrap gap-2">
                        {project.specialLinks.chatbot && (
                          <a 
                            href={project.specialLinks.chatbot}
                            className="inline-flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-sm hover:bg-orange-600 transition-colors"
                          >
                            🤖 Chatbot
                          </a>
                        )}
                        {project.specialLinks.automation && (
                          <a 
                            href={project.specialLinks.automation}
                            className="inline-flex items-center gap-1 bg-purple-500 text-white px-3 py-1 rounded-full text-sm hover:bg-purple-600 transition-colors"
                          >
                            🔄 Automation
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  
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
        </div>
      </motion.section>
    </>
  );
};

export default Projects;