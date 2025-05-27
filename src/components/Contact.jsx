import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Contact</h2>
      <p className="text-center text-gray-700 mb-6">
        Feel free to reach out, I'm always open to collaboration or just chatting about cool ideas.
      </p>
      <div className="flex flex-col items-center gap-4 text-lg text-emerald-700">
        <a href="mailto:dangmq10@gmail.com" className="hover:underline">dangmq10@gmail.com</a>
        <a
          href="https://www.linkedin.com/in/matthew-dang-b54907281/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/matthew-dang"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;