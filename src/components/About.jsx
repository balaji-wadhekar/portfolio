import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Brain, Link2, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    {
      title: 'Backend Development',
      description: 'Building robust, scalable server-side logic using Node.js and JavaScript ecosystems.',
      icon: <Network className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Solving complex problems and optimizing code performance with a strong foundation in DSA.',
      icon: <Database className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'AI & Machine Learning',
      description: 'Growing interest in training models, understanding neural networks, and prompt engineering.',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Blockchain Technology',
      description: 'Exploring decentralized applications (dApps), smart contracts, and Web3 infrastructure.',
      icon: <Link2 className="w-6 h-6 text-yellow-400" />
    },
    {
      title: 'OS Architecture',
      description: 'Deep diving into operating system internals, memory management, and concurrent computing.',
      icon: <Cpu className="w-6 h-6 text-rose-400" />
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
    <section id="about" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
            <span className="text-cyan-400 mr-4 text-2xl font-mono">01.</span>
            About Me
            <div className="ml-6 flex-grow h-px bg-slate-200 dark:bg-slate-800 transition-colors duration-300"></div>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors duration-300">
            I am a passionate 4th-semester Computer Engineering student based at MITSOC.
            My journey in software engineering is driven by a curiosity to understand how systems work
            under the hood, scaling from foundational <span className="text-cyan-400">Data Structures</span> to complex <span className="text-cyan-400">OS Architectures</span>.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mt-4 transition-colors duration-300">
            Currently, I am heavily focused on building reliable backends with <span className="tailwind-white-glow">Node.js</span> and <span className="tailwind-white-glow">JavaScript</span>,
            while also expanding my knowledge horizontally into emerging fields like <span className="text-purple-400">AI/ML</span> and <span className="text-yellow-400">Blockchain</span>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 p-6 rounded-xl shadow-md dark:shadow-none border border-slate-200 dark:border-slate-800 flex flex-col items-start group"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:scale-110 transition-all duration-300 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 tracking-wide transition-colors duration-300">{skill.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm transition-colors duration-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default About;
