import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-6 flex flex-col items-center">
      {/* Top bar */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6 pt-20">
        <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <FaArrowLeft />
          <span>Back to Portfolio</span>
        </Link>
        <a 
          href="/Wadhekar_Balaji_Resume.pdf" 
          download="Wadhekar_Balaji_Resume.pdf"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors shadow-lg"
        >
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <iframe 
        src="/Wadhekar_Balaji_Resume.pdf" 
        className="w-full max-w-4xl h-[80vh] rounded-xl border border-slate-800 shadow-2xl mt-2"
        title="Resume PDF"
      ></iframe>
    </div>
  );
};

export default ResumePage;
