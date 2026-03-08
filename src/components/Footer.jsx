import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0b1120] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Area (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Column 1 (Brand) */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              Balaji <span className="text-blue-600 dark:text-blue-500">Wadhekar</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300 max-w-sm">
              B.Tech Computer Science student at MIT ADT University, Pune. Passionate about creating innovative web solutions and building the future of technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/balaji-babasaheb-wadhekar-0a0237354" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/balaji-wadhekar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 (Quick Links) */}
          <div className="md:ml-auto flex flex-col md:items-end">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Quick Links</h3>
            <ul className="space-y-3 text-left md:text-right">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 inline-flex items-center md:flex-row-reverse group">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mr-2 md:mr-0 md:ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-600 dark:text-slate-500 transition-colors duration-300">
          <p>
            &copy; 2026 Balaji Wadhekar. All rights reserved.
          </p>
          <p>
            Made with <span className="text-red-500 mx-1">❤️</span> using React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
