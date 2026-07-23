'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Magnetic from './animations/Magnetic';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center backdrop-blur-lg bg-white/70 border-b border-brand-primary/10"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold text-gray-800"
      >
        Samsun
        {/* <span className="text-brand-primary"></span> */}
      </motion.div>

      <button
  onClick={() => setOpen(!open)}
  className="md:hidden text-gray-800"
>
  {open ? <X size={28} /> : <Menu size={28} />}
</button>

      <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-500">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Magnetic>
              <Link
                className={`transition-colors duration-300 ${
                  activeSection === link.id ? 'text-brand-primary underline decoration-2 underline-offset-4' : 'hover:text-brand-primary text-gray-500'
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            </Magnetic>
          </li>
        ))}
      </ul>


      {open && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">

    {navLinks.map((link)=>(
      <Link
        key={link.id}
        href={link.href}
        onClick={()=>setOpen(false)}
        className={`block px-6 py-4 border-b ${
          activeSection === link.id
          ? "text-brand-primary"
          : "text-gray-600"
        }`}
      >
        {link.name}
      </Link>
    ))}


    <a
      href="/resume.pdf"
      download
      className="block mx-6 my-4 text-center bg-brand-primary text-white py-3 rounded-full"
    >
      Download Resume
    </a>

  </div>
)}
    </motion.nav>
  );
}
