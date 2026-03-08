import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'MIT ADT University, Pune',
      date: '2023 - Present',
      location: 'Pune, Maharashtra',
      badge: 'Ongoing',
      description: 'Actively pursuing a specialization in AI and Analytics, focusing on core concepts like Data Structures & Algorithms, and leveraging Python, SQL, and key AI model integrations for application development.'
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      institution: 'Government Polytechnic College, Jalna',
      date: '2022 - 2025',
      location: 'Jalna, Maharashtra',
      badge: 'Completed',
      description: 'Graduated with 87.49%, gaining a solid foundation in computer science principles and extensive hands-on programming experience in core languages like JavaScript, Java, and Python.'
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
            <span className="text-cyan-400 mr-4 text-2xl font-mono">01.5</span>
            Education
            <div className="ml-6 flex-grow h-px bg-slate-200 dark:bg-slate-800 transition-colors duration-300"></div>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors duration-300 shadow-md dark:shadow-none hover:shadow-lg group flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Left Side: Icon Container */}
              <div className="shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex-grow space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300 mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 transition-colors duration-300">
                    {item.institution}
                  </h4>
                </div>

                {/* Details Row (Calendar, Location, Badge) */}
                <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs sm:text-sm transition-colors duration-300 border border-purple-200 dark:border-purple-800/50">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Summary Paragraph */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Education;
