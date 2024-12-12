// components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-red-600">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 border border-red-600" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 border border-red-600" required />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-gray-800 border border-red-600" rows={5} required></textarea>
          <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;