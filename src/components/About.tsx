// components/About.tsx
import Image from "next/image";
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-red-600">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
          <Image
  src="/image.jpeg"
  alt="Profile" 
  className="rounded-full w-full max-w-s border border-red-600"
  width={500} // Specify the width based on your design
  height={500} // Specify the height based on your design
  layout="intrinsic"
/>

         
          </div>
          <div>
            <p className="text-lg mb-6">
            Hello, I’m Ayesha Farooq – a dedicated college student and an aspiring web developer with a deep passion for technology and innovation. My journey into web development has been driven by a fascination with creating digital experiences that are both functional and visually appealing. I am committed to honing my skills across both front-end and back-end development, with a particular focus on building responsive and user-friendly websites and applications.
            <br/>
            <br/>

I am continuously expanding my technical toolkit, recently diving into TypeScript to complement my foundational skills in HTML, CSS, and C++. My academic background has equipped me with a solid understanding of web development principles, and I am excited to apply this knowledge to real-world projects that make a tangible impact.
<br/>
<br/>

Eager to broaden my expertise and embrace new challenges, I am dedicated to continuous learning and growth in the tech field. I look forward to contributing fresh ideas and perspectives, driven by my goal to build scalable, efficient, and user-centered digital solutions.


            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p>1 Years</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p>8+ Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 



