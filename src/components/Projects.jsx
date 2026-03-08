import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  // Placeholder projects
  const projects = [
    {
      title: 'E-Commerce Backend API',
      description: 'A robust RESTful API built with Node.js, Express, and MongoDB. Features secure JWT authentication, cart management, and payment gateway integration.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      github: '#',
      live: '#'
    },
    {
      title: 'Smart Home Hub Dashboard',
      description: 'A full-stack dashboard for monitoring IoT devices using an ATmega328P microcontroller, displaying real-time sensor data with WebSockets.',
      tech: ['React', 'Node.js', 'WebSockets', 'C++'],
      github: '#',
      live: '#'
    },
    {
      title: 'Blockchain Voting DApp',
      description: 'A decentralized voting application built on Ethereum testnet. Ensures transparent and immutable voting records using Solidity smart contracts.',
      tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Sentiment Analyzer',
      description: 'A Python-based machine learning model that analyzes movie reviews, built using Pandas for data processing and deployed via a Flask API.',
      tech: ['Python', 'Pandas', 'Scikit-Learn', 'Flask'],
      github: '#',
      live: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
            <span className="text-cyan-400 mr-4 text-2xl font-mono">03.</span>
            Featured Work
            <div className="ml-6 flex-grow h-px bg-slate-200 dark:bg-slate-800 transition-colors duration-300"></div>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors duration-300">
            Here are a few select projects that demonstrate my ability to architect backends, design algorithms, and explore new technologies ranging from <span className="text-cyan-400">IoT</span> to <span className="text-purple-400">Web3</span>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white dark:bg-slate-900 transition-colors duration-300 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-none hover:shadow-lg flex flex-col h-full group"
            >
              <div className="flex justify-between items-center mb-6">
                <FolderGit2 className="w-10 h-10 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                <div className="flex space-x-4">
                  <a href={project.github} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow transition-colors duration-300">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((item, i) => (
                  <li key={i} className="text-cyan-600 dark:text-cyan-300/80 text-sm font-mono bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full transition-colors duration-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Projects;
