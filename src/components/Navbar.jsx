import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-emerald-600 text-xl">Matthew Dang</span>
        <div className="space-x-6 text-sm">
          <a href="#intro" className="text-gray-700 hover:text-emerald-600">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-emerald-600">Projects</a>
          <a href="#experience" className="text-gray-700 hover:text-emerald-600">Experience</a>
          <a href="#skills" className="text-gray-700 hover:text-emerald-600">Skills</a>
          <a href="#resume" className="text-gray-700 hover:text-emerald-600">Resume</a>
          <a href="#contact" className="text-gray-700 hover:text-emerald-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;