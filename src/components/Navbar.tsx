// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="flex justify-center items-center gap-6">
        <Link href="/" className="text-white hover:text-red-600">Home</Link>
        <Link href="/about" className="text-white hover:text-red-600">About</Link>
        <Link href="/projects" className="text-white hover:text-red-600">Projects</Link>
        <Link href="/Skills" className="text-white hover:text-red-600">Skills</Link> 
      </div>
      
    </nav>
  );
};

export default Navbar;