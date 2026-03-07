import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Engineering',
      status: '(Ongoing)',
      institution: 'MIT ADT University, Pune',
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      details: null
    },
    {
      degree: 'Diploma in Computer Science & Engineering',
      status: '(2025)',
      institution: 'Government Polytechnic College, Jalna',
      icon: <Award className="w-6 h-6 text-emerald-400" />,
      details: 'Graduated with 87.49%'
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gray-950 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 flex items-center">
            <span className="text-cyan-400 mr-4 text-2xl font-mono">01.5</span>
            Education
            <div className="ml-6 flex-grow h-px bg-gray-800"></div>
          </h2>
        </motion.div>

        <div className="relative border-l border-gray-700 ml-4 sm:ml-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 ml-8 sm:ml-12 relative group"
            >
              {/* Glowing Dot */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-125 transition-transform duration-300"></div>

              {/* Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-900 rounded-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {item.degree} <span className="text-cyan-400 text-lg font-normal">{item.status}</span>
                    </h3>
                  </div>
                </div>
                
                <h4 className="text-lg text-gray-300 font-medium mb-2">
                  {item.institution}
                </h4>

                {item.details && (
                  <p className="text-gray-400 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Education;
