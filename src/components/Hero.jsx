import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Column (Image) */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative shadow-[0_0_40px_rgba(59,130,246,0.3)] rounded-full">
            {/* Placeholder Image */}
            <img
              src="/profile.jpeg"
              alt="Balaji Wadhekar"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-slate-200 dark:border-slate-800 transition-colors duration-300"
            />
          </div>
        </motion.div>

        {/* Right Column (Text & CTAs) */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Hello, I am <br className="hidden lg:block pb-2" />
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Balaji Wadhekar
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
            Data Analyst & AI Enthusiast
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed transition-colors duration-300">
            A Computer Engineering student at MIT ADT University, Pune. Passionate about uncovering insights from complex datasets, building AI-powered analytical tools, and leveraging Python, SQL, and Machine Learning to solve real-world problems.
          </p>

          {/* Call to Action Area (Icons Only) */}
          <div className="flex items-center gap-8 pt-6">
            <a
              href="/Wadhekar_Balaji_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-125 text-3xl"
              aria-label="Resume"
              title="View Resume"
            >
              <FaFileAlt />
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-125 text-3xl"
              aria-label="Contact"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/balaji-wadhekar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-125 text-3xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/balaji-babasaheb-wadhekar-0a0237354"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-125 text-3xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
