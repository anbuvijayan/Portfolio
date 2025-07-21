import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import TypewriterText from '../TypewriterText';
import ParticleBackground from '../ParticleBackground';
import '../../App.css';
import profileImg from '../../assets/Images/profile.jpg';
import resume from '../../assets/resume.pdf';


const HomeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-6"
    >
      {/* Starfield background */}
      <ParticleBackground />

      <motion.div
        className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Hi, I'm
            </span>
            <br />
            <span className="text-white">Anbarasan</span>
          </motion.h1>

          <motion.div
            className="text-xl lg:text-2xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            <TypewriterText
              texts={[
                'MERN Stack Developer',
                'Full Stack Developer',
              ]}
              className="text-xl lg:text-2xl"
            />
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl"
            variants={itemVariants}
          >
            Passionate about building responsive and user-friendly web
            applications with MongoDB, Express.js, React.js, and Node.js.
            Committed to continuous learning and eager to contribute to dynamic
            development teams.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            variants={itemVariants}
          >
            {/* Get In Touch Button */}
            <a
              href="mailto:anbuvijayan02@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-purple-500/50 hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>

            {/* Download CV Button */}
            <a
              href={resume}
              download="Anbarasan_CV.pdf"
              className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center lg:justify-start"
            variants={itemVariants}
          >
            {[
              { icon: Github, href: 'https://github.com/anbuvijayan', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/anbuv/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:anbuvijayan02@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-blue-500/50 hover:scale-110 transition-transform duration-300 text-gray-300 hover:text-blue-400"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Profile Photo */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            {/* Image */}
            <div className="relative w-[22rem] h-[33rem] rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
              <img
                src={profileImg}
                alt="Anbarasan - MERN Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
