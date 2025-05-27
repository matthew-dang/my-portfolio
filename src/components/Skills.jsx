import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';


const skills = {
  Languages: ["Python", "JavaScript", "C++", "HTML", "CSS"],
  Frameworks: ["React", "Flask", "Tailwind CSS", "Firebase", "Expo"],
  Tools: ["Git", "Supabase", "Selenium", "Postman"],
  AI_ML: ["PyTorch", "ResNet50", "CLIP", "KNN", "Siamese Networks"],
};

const Skills = () => {
  return (
    <FadeInWhenVisible>
      <section id="skills" className="bg-white p-8 rounded-2xl shadow-md max-w-5xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Skills</h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {category.replace("_", " & ")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Skills;