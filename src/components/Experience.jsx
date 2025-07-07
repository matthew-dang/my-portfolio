import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';

const experiences = [
    {
    title: "AI Engineering Intern @ PM Accelerator",
    time: "2025 – Present",
    description: [
      "Collaborating with product managers, designers, and data scientists to build full-stack AI and GenAI applications in an agile environment.",
      "Exploring and applying cutting-edge AI tools, including large language models (LLMs), prompt engineering techniques, and machine learning frameworks.",
      "Developing and integrating APIs (e.g., OpenAI/ChatGPT) into intelligent, data-driven web applications.",
      "Contributing to front-end and back-end development with a focus on scalable, AI-enhanced user experiences.",
      "Assisting in building secure, efficient data pipelines to support machine learning models and product features.",
      "Conducting technical research on state-of-the-art AI/ML methods and presenting key insights to the development team."
    ]
  },
  {
    title: "Fusion ICS Developer @ UC Irvine",
    time: "2024 – 2025",
    description: [
      "Built a research listing platform using Supabase and React.",
      "Collaborated in Agile sprints and delivered clean UX using Tailwind.",
      "Won Best UX award at ZotLabs Demo Day."
    ]
  },
  {
    title: "Mobile App Developer – UCI Nutrition App",
    time: "2024",
    description: [
      "Developed a React Native app for UC Irvine students to preview meals and track nutrition goals.",
      "Used Firebase for user authentication and Firestore for data storage.",
      "Designed clean UI with Expo components and native modules."
    ]
  },
  {
    title: "Python Tutor",
    time: "2023",
    description: [
      "Tutored high school students in Python, covering data types, loops, and functions.",
      "Customized learning paths based on student pace and goals."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience"  className="bg-white p-8 rounded-2xl shadow-md max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <FadeInWhenVisible key={index}>
            <div className="border-l-4 border-emerald-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{exp.time}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default Experience;