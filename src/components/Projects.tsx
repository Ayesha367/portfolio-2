import React from 'react';
import Image from "next/image";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A countdown timer app created with React and Next.js.",
      technologies: ["React", "Next.js", "TailwindCSS"],
      image: "/image1.PNG",
      link: "https://countdown-timer-ten-psi.vercel.app/"
    },
    {
      title: "Project2",
      description: "A weather widget app that shows live weather data.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      image: "/image-3.PNG",
      link: "https://weather-widget-app.vercel.app/"
    },
    {
      title: "Project 3",
      description: "A simple calculator app with basic arithmetic functions.",
      technologies: ["React", "Next.js", "TailwindCSS"],
      image: "/image2.PNG",
      link: "https://simple-calculator-avyy.vercel.app/"
    },
    {
      title: "Project 4",
      description: "A birthday wishing app.",
      technologies: ["React", "Next.js", "TailwindCSS"],
      image: "/image4.PNG",
      link: "https://birthday-wish-app-three.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-red-600">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-red-600 rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <Image 
                src={project.image} 
                alt={project.title} 
                width={500} // Replace with the actual width of the image
                height={300} // Replace with the actual height of the image
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 ">{project.description}</p>
                <p className="text-sm text-gray-400">Technologies: {project.technologies.join(', ')}</p>
                <a href={project.link} className="text-red-600 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
