import React from 'react';

const Intro = () => {
  return (
    <section id="intro"
    className="max-w-6xl mx-auto bg-cover bg-center bg-no-repeat p-8 pt-16"
    style={{ backgroundImage: "url('/background.webp')" }}
    >
    <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/70 rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-center gap-10 ">
        <img
        src="/profile.png"
        alt="Profile"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl font-bold text-emerald-700 mb-2">Hi, I’m Matthew Dang</h1>
        <p className="text-lg text-gray-700">
            I'm a Computer Science major at UC Irvine passionate about building AI-powered tools, remixing tech with creativity, and crafting full-stack apps with clean UX.
        </p>
        </div>
    </div>
    </section>
  );
};

export default Intro;