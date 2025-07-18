import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Globe, GraduationCap, Award } from 'lucide-react';
import profileImg from '../../assets/Images/profile.jpg';
import resume from '../../assets/resume.pdf';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React.js, HTML, CSS, JavaScript with Redux Toolkit for state management.',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Express.js, RESTful APIs with secure JWT authentication.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'MongoDB with Mongoose for efficient and scalable data storage.',
    },
    {
      icon: Globe,
      title: 'Full Stack Integration',
      description: 'MERN stack expertise with deployment on platforms like Vercel.',
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'MERN Stack Projects',
      company: 'Self-based Development',
      description: 'Built Task Manager and BulkMail applications using full MERN stack.',
      icon: Award,
    },
    {
      year: '2025',
      title: 'Full Stack MERN Certification',
      company: 'Error Makes Clever',
      description: 'Completed comprehensive MERN stack development program.',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Bachelor of Science',
      company: 'Dr. M.G.R. Chokalingam Arts College',
      description: 'Graduated with Computer Science degree.',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* About Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
        >
          {/* Profile Image with Glow */}
          <div className="relative w-52 h-72 rounded-full">
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 animate-spin-slow blur-2xl"></div>
            {/* Profile Image */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <img
                src={profileImg}
                alt="Anbarasan - MERN Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              I’m Anbarasan, a passionate MERN Stack Developer from Chennai with strong foundational
              knowledge in MongoDB, Express.js, React.js, and Node.js. I build responsive, user-friendly web
              applications and thrive on learning modern technologies.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                📞 <span className="font-medium">Phone:</span> 7358803983
              </div>
              <div className="flex items-center gap-2">
                📍 <span className="font-medium">Location:</span> Chennai, India
              </div>
            </div>
            <a
              href={resume}
              download
              className="inline-flex bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full shadow hover:scale-105 transition-transform items-center gap-2"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 text-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-800 dark:to-blue-900 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                  } ml-12 md:ml-0`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-1 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      <item.icon className="w-4 h-4" />
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <div className="text-gray-600 dark:text-gray-300 mb-2">{item.company}</div>
                    <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-1/2 border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
