// components/Header.tsx
"use client";  

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black text-white z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-red-600 text-2xl font-bold">Portfolio</div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="hover:text-red-600">Home</Link>
            <Link href="#about" className="hover:text-red-600">About</Link>
            <Link href="#experience" className="hover:text-red-600">Experience</Link>
            <Link href="#projects" className="hover:text-red-600">Projects</Link>
            <Link href="#Skills" className="hover:text-red-600">Skills</Link>
            <Link href="#contact" className="hover:text-red-600">Contact</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="#home" className="hover:text-red-600">Home</Link>
              <Link href="#about" className="hover:text-red-600">About</Link>
              <Link href="#experience" className="hover:text-red-600">Experience</Link>
              <Link href="#projects" className="hover:text-red-600">Projects</Link>
              <Link href="#Skills" className="hover:text-red-600">Skills</Link>
              <Link href="#contact" className="hover:text-red-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;