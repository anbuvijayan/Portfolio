import React from 'react';
import { motion } from 'framer-motion';

// Import icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaTools,
  FaCode,
  FaLaptopCode,
  FaChrome,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostman,
  SiMongoose,
  SiJsonwebtokens,
} from 'react-icons/si';

// Skill categories data
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: 'RESTful API', icon: <FaCode className="text-blue-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Mongoose', icon: <SiMongoose className="text-red-600" /> },
      { name: 'JWT Auth', icon: <SiJsonwebtokens className="text-emerald-500" /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', icon: <FaLaptopCode className="text-blue-400" /> },
      { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'Chrome DevTools', icon: <FaChrome className="text-yellow-400" /> },
      { name: 'MongoDB Compass', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
];

// Certifications data
const certifications = [
  { title: 'Full Stack MERN Development', org: 'Error Makes Clever', id: 'FSWD16051' },
  { title: '30 Days Full Stack Challenge', org: 'Novitech R&D Pvt. Ltd.', id: 'Challenge' },
];

// Scrolling marquee icons (flat array of all icons)
const scrollingIcons = [
  <FaReact className="text-sky-500 text-5xl mx-6" />,
  <SiJavascript className="text-yellow-400 text-5xl mx-6" />,
  <FaHtml5 className="text-orange-600 text-5xl mx-6" />,
  <FaCss3Alt className="text-blue-600 text-5xl mx-6" />,
  <SiTailwindcss className="text-cyan-400 text-5xl mx-6" />,
  <SiRedux className="text-purple-600 text-5xl mx-6" />,
  <FaNodeJs className="text-green-600 text-5xl mx-6" />,
  <SiExpress className="text-gray-700 dark:text-gray-300 text-5xl mx-6" />,
  <FaCode className="text-blue-400 text-5xl mx-6" />,
  <SiMongodb className="text-green-600 text-5xl mx-6" />,
  <SiMongoose className="text-red-600 text-5xl mx-6" />,
  <SiJsonwebtokens className="text-emerald-500 text-5xl mx-6" />,
  <FaLaptopCode className="text-blue-400 text-5xl mx-6" />,
  <FaGithub className="text-gray-800 dark:text-white text-5xl mx-6" />,
  <SiPostman className="text-orange-500 text-5xl mx-6" />,
  <FaChrome className="text-yellow-400 text-5xl mx-6" />,
  <SiFirebase className="text-yellow-400 text-5xl mx-6" />,
];

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Proficient in the MERN stack with hands-on experience in building full-stack web applications and modern development tools.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-xl p-3 shadow hover:scale-105 transition-transform"
                  >
                    <div className="text-3xl">{skill.icon}</div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Marquee Icons */}
        <div className="relative overflow-hidden py-10 mt-16">
          <motion.div
            className="flex gap-8 animate-scroll"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            {scrollingIcons.concat(scrollingIcons).map((icon, index) => (
              <div key={index} className="flex-shrink-0">
                {icon}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            Certifications & Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{cert.org}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  ID: {cert.id}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
