import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="scroll-mt-24 bg-white p-8 rounded-2xl shadow-md max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Resume</h2>
      <div className="text-center space-y-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-700 transition"
        >
          Download Resume
        </a>

        {/* Optional: Embedded viewer */}
        <iframe
          src="/resume.pdf"
          className="w-full h-[600px] border mt-6 rounded-md shadow"
          title="Resume"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;