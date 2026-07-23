'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';
import Magnetic from './animations/Magnetic';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-brand-primary/10 py-12 px-8 overflow-hidden bg-white/50">
      <FadeIn viewportMargin="0px">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-gray-800">
            Samsun
            {/* <span className="text-brand-primary">&lt;/&gt;</span> */}
          </div>
          <ul className="flex space-x-6 text-sm font-bold text-gray-500">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Magnetic>
                  <Link className="hover:text-brand-primary transition-colors duration-300" href={link.href}>
                    {link.name}
                  </Link>
                </Magnetic>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent mt-12 w-full origin-center"
        />
      </FadeIn>
    </footer>


  );
}

