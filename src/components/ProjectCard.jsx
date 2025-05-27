import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <FadeInWhenVisible>
      <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-200 h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </FadeInWhenVisible>
  );
};

export default ProjectCard;