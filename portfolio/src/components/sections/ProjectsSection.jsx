import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Task Manager Images
import Wel from "../../assets/Images/Task_Manager_Images/Img1.png";
import Sign from "../../assets/Images/Task_Manager_Images/Img2.png";
import Login from "../../assets/Images/Task_Manager_Images/Img3.png";
import Home from "../../assets/Images/Task_Manager_Images/Img4.png";
import Creat from "../../assets/Images/Task_Manager_Images/Img5.png";
import Task from "../../assets/Images/Task_Manager_Images/Img6.png";
import Task_Card from "../../assets/Images/Task_Manager_Images/Img7.png";
import Update from "../../assets/Images/Task_Manager_Images/Img8.png";
import MyTask from "../../assets/Images/Task_Manager_Images/Img9.png";
import Profile from "../../assets/Images/Task_Manager_Images/Img10.png";

// BulkMail Application Images
import BulkMail1 from "../../assets/Images/BulkMail_Images/Img1.png";
import BulkMail2 from "../../assets/Images/BulkMail_Images/Img2.png";

// Weather App Images
import Weather1 from "../../assets/Images/Weather_Images/Img1.png";
import Weather2 from "../../assets/Images/Weather_Images/Img2.png";
import Weather3 from "../../assets/Images/Weather_Images/Img3.png";

// Actodo Images
import Actodo1 from "../../assets/Images/Actodo_Images/Img1.png";
import Actodo2 from "../../assets/Images/Actodo_Images/Img2.png";
import Actodo3 from "../../assets/Images/Actodo_Images/Img3.png";
import Actodo4 from "../../assets/Images/Actodo_Images/Img4.png";
import Actodo5 from "../../assets/Images/Actodo_Images/Img5.png";

// Projects Data
const projects = [
  {
    title: "Task Manager",
    description:
      "Full-stack task manager web app with JWT authentication, task CRUD, and responsive design.",
    images: [
      Wel, Sign, Login, Home, Creat,
      Task, Task_Card, Update, MyTask, Profile,
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "https://task-manager-xi-lemon.vercel.app/",
    githubUrl: "https://github.com/anbuvijayan/Task-Manager",
    period: "Mar 2025",
    category: "Fullstack",
  },
  {
    title: "BulkMail Application",
    description:
      "Bulk email app with scheduling, delivery tracking, and analytics built on MERN stack.",
    images: [BulkMail1, BulkMail2],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Email API"],
    liveUrl: "https://bulkmail-frontend-alpha.vercel.app/",
    githubUrl: "https://github.com/anbuvijayan/Bulkmail-backend",
    period: "Apr 2025 – May 2025",
    category: "Backend",
  },
  {
    title: "Weather App",
    description:
      "Weather app displaying current weather and forecasts using a weather API.",
    images: [Weather1, Weather2, Weather3],
    tech: ["React.js", "Tailwind CSS", "Weather API"],
    liveUrl: "https://weather-app-iota-tawny.vercel.app/",
    githubUrl: "https://github.com/anbuvijayan/Weather-App",
    period: "Jan 2025",
    category: "Frontend",
  },
  {
    title: "Actodo",
    description:
      "A task management tool for teams to organize and prioritize work.",
    images: [Actodo1, Actodo2, Actodo3, Actodo4, Actodo5],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    liveUrl: "https://actodo-pied-ten.vercel.app/",
    githubUrl: "https://github.com/anbuvijayan/Actodo",
    period: "Feb 2025",
    category: "Frontend",
  },
];

const categories = ["All", "Frontend", "Backend", "Fullstack"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-1">
            Featured Projects
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My recent projects built with modern web technologies.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm font-medium border ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow"
                    : "text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                } transition-colors`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <AchievementsCard />
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)} // Close on backdrop click
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing
            >
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

// Project Card Component
const ProjectCard = ({ project, onOpen }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative cursor-pointer h-full flex flex-col"
      onClick={onOpen}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.images[currentImage]}
          alt={`${project.title} preview`}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Arrows */}
        <button
          onClick={prevImage}
          aria-label="Previous Image"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          aria-label="Next Image"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
          {project.period}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 flex-1">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

// Modal Component
const ProjectModal = ({ project, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-lg w-full relative"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-3 right-3 bg-gray-100 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="relative">
        <img
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="rounded-t-xl object-cover w-full h-64"
        />
        {/* Arrows */}
        <button
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          aria-label="Next image"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Achievements Component
const AchievementsCard = () => {
  const achievements = [
    { value: "4+", label: "MERN Projects" },
    { value: "100%", label: "Deployed on Vercel" },
    { value: "JWT", label: "Secure Authentication" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Key Achievements
      </h3>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1"
          >
            {item.value}
            <div className="text-base text-gray-600 dark:text-gray-300 font-medium mt-1">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
