import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFileAlt, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '34f68099-1d00-4791-a8b1-7892e2a70a7c',
          ...formData
        })
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
    setTimeout(() => setStatus(prev => prev !== 'loading' ? 'idle' : prev), 5000);
  };

  const contactData = [
    { id: 1, icon: <FaFileAlt className="w-6 h-6" />, title: 'Resume', detail: 'View My Resume', link: '/resume', isRouterLink: true },
    { id: 2, icon: <FaLinkedin className="w-6 h-6" />, title: 'LinkedIn', detail: 'balaji-wadhekar', link: 'https://linkedin.com/in/balaji-babasaheb-wadhekar-0a0237354' },
    { id: 3, icon: <FaGithub className="w-6 h-6" />, title: 'GitHub', detail: 'balaji-wadhekar', link: 'https://github.com/balaji-wadhekar' },
    { id: 4, icon: <FaMapMarkerAlt className="w-6 h-6" />, title: 'Location', detail: 'Pune, Maharashtra', link: null },
    { id: 5, icon: <FaPhone className="w-6 h-6" />, title: 'Phone', detail: '+91 9322943634', link: 'tel:+919322943634' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column (Contact Info) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 transition-colors duration-300">
              Whether you have a project in mind, want to discuss opportunities, or simply want to say hello, I'd love to hear from you. Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-4">
              {contactData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.link ? (
                    item.isRouterLink ? (
                      <Link to={item.link} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#111827] rounded-lg p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300 border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none group">
                        <div className="bg-blue-50 dark:bg-[#1f2937] p-3 rounded-md text-blue-600 dark:text-blue-500 transition-colors duration-300 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-slate-900 dark:text-white text-sm font-medium transition-colors duration-300">{item.title}</h4>
                          <p className="text-blue-600 dark:text-blue-500 font-semibold transition-colors duration-300">{item.detail}</p>
                        </div>
                      </Link>
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#111827] rounded-lg p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300 border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none group">
                        <div className="bg-blue-50 dark:bg-[#1f2937] p-3 rounded-md text-blue-600 dark:text-blue-500 transition-colors duration-300 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-slate-900 dark:text-white text-sm font-medium transition-colors duration-300">{item.title}</h4>
                          <p className="text-blue-600 dark:text-blue-500 font-semibold transition-colors duration-300">{item.detail}</p>
                        </div>
                      </a>
                    )
                  ) : (
                    <div className="bg-white dark:bg-[#111827] rounded-lg p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300 border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none cursor-default">
                      <div className="bg-blue-50 dark:bg-[#1f2937] p-3 rounded-md text-blue-600 dark:text-blue-500 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-white text-sm font-medium transition-colors duration-300">{item.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 font-semibold transition-colors duration-300">{item.detail}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-start"
          >
            <div className="bg-white dark:bg-[#111827] p-8 rounded-xl shadow-lg dark:shadow-none border border-slate-200 dark:border-transparent transition-colors duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700 rounded-md p-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700 rounded-md p-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-slate-50 dark:bg-[#1f2937] border border-slate-200 dark:border-slate-700 rounded-md p-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium p-3 rounded-md transition-colors duration-300 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'}`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-500 dark:text-emerald-400 font-medium text-center pt-2">Message sent successfully!</motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rose-500 dark:text-rose-400 font-medium text-center pt-2">Something went wrong. Try again.</motion.p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
