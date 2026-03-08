import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      category: 'Backend & Core',
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      skills: ['Node.js', 'Data Structures & Algorithms','MongoDB']
    },
    {
      category: 'Data & Hardware',
      icon: <Database className="w-6 h-6 text-purple-400" />,
      skills: ['Python', 'Pandas', 'ML']
    },
    {
      category: 'Tech Interests',
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      skills: ['AI/ML', 'Blockchain', 'Home Automation', 'Data analysts']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    // Only fade in on load, the hover scaling is handled by whileHover
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 inline-flex items-center transition-colors duration-300">
            <span className="text-cyan-400 mr-4 text-2xl font-mono">02.</span>
            Technical Arsenal
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive overview of the technologies, languages, and concepts I leverage to build robust solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          // Tailwind implements the responsive grid: 1 column on mobile, 2 on md screens
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white dark:bg-slate-900 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-md dark:shadow-none hover:shadow-xl cursor-default transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg mr-4 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-wide transition-colors duration-300">
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-3 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3"></span>
                    <span className="text-base sm:text-lg hover:text-cyan-300 transition-colors duration-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background glow behind the grid */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default Skills;
