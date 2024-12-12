// components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "x-y-z Company",
      duration: "2022 - 2023",
      description: "Description of your role and responsibilities"
    },
    // Add more experiences
  ];

  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-red-600">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-red-600 p-6 rounded-lg hover:bg-red-900/20 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <p className="text-red-600 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;