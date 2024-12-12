import Image from "next/image";
import React from 'react';

const skillsData = [
  { name: 'HTML', level: 90, logo: '/html image.jpg' },
  { name: 'CSS', level: 85, logo: '/css1.png' },
  { name: 'TypeScript', level: 95, logo: '/typescript.jpg' },
  { name: 'React', level: 50, logo: '/react.jpg' },
  { name: 'Next.js', level: 80, logo: '/nextjs.jpg' },
  { name: 'JavaScript', level: 75, logo: '/javascript.jpg' },
  { name: 'Python', level: 20, logo: '/python.png' },
];

const Skills = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform"
            >
              {/* Logo Container with Fixed Height */}
              <div className="h-24 flex items-center justify-center">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}  // Corrected this line
                  className="max-h-20 w-auto object-contain" 
                  width={50}  // Add a fixed width if necessary
                  height={50} // Add a fixed height if necessary
                />
              </div>

              {/* Skill Name */}
              <h2 className="text-xl font-semibold text-center">{skill.name}</h2>

              {/* Skill Progress Container */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-red-600 h-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="text-sm font-medium text-gray-300">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
