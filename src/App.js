import React from 'react';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Contact from './components/Contact';



const projects = [
    {
    title: "Discord RAG Bot",
    description: "Deployed AI-powered Discord bot that answers user questions using Retrieval-Augmented Generation (RAG) with vector search and LLMs.",
    tech: ["Python", "FastAPI", "FAISS", "Azure AI Inference", "DeepSeek", "Discord.py"],
    github: "https://github.com/matthew-dang/discord-ragbot",
    demo: "",
  },
  {
    title: "DJ-AI Remix Recommender",
    description: "Recommends remix tracks using Siamese networks and audio spectrogram embeddings.",
    tech: ["Python", "PyTorch", "Librosa", "Selenium"],
    github: "https://github.com/matthew-dang/dj-ai",
    demo: "",
  },
  {
    title: "Fashion Recommender",
    description: "Suggests outfits based on user preferences using image embeddings from ResNet50.",
    tech: ["Python", "PyTorch", "Selenium", "KNN", "Flask", "SQLite"],
    github: "https://github.com/matthew-dang/starbase",
    demo: "",
  },
  {
    title: "ZotLabs UX Award Project",
    description: "Full-stack research app that won Best UX in UC Irvine’s ZotLabs showcase.",
    tech: ["React", "Supabase", "Tailwind", "DaisyUI"],
    demo: "https://drive.google.com/file/d/1-mFn3XVz9F4VnoL62B9UHN5-hXU_k2JP/view?usp=sharing",
  },
  {
    title: "UCI Nutrition Tracker App",
    description: "Mobile app for UC Irvine students to view featured meals, track daily nutrition, and compare progress against goals.",
    tech: ["React Native", "Firebase Firestore", "Expo", "JavaScript"],
    github: "https://github.com/LexTruong/ZotterMeals",
  },
];

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background2.webp')" }}
    >
      <Navbar />
      <div className="bg-white/70 backdrop-blur-sm min-h-screen p-8 space-y-12">
        <Intro />
        <div className="max-w-5xl mx-auto">
          <section id="projects" className="scroll-mt-24">
            <h1 className="text-4xl font-bold text-center text-emerald-600 mb-10">My Projects</h1>
            <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
              {projects.map((proj, index) => (
                <ProjectCard key={index} {...proj} />
              ))}
            </div>
          </section>
        </div>
        <Experience />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </div>
  );
} 

export default App;

      
