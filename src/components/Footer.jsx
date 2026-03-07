import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-900 border-opacity-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <motion.a
            href="https://github.com/balaji-wadhekar" // Replace with actual link later
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-5 h-5 space-y-4" />
            <span className="sr-only">GitHub</span>
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/balaji-babasaheb-wadhekar-0a0237354" // Replace with actual link later
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-gray-400 hover:text-blue-500 transition-colors inline-block"
          >
            <Linkedin className="w-5 h-5 space-y-4" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
        </div>

        <p className="text-gray-500 text-sm font-mono tracking-widest mt-2">
          Built by Balaji Wadhekar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
