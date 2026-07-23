'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from '@/lib/gsap';
import TextReveal from './animations/TextReveal';
import Magnetic from './animations/Magnetic';


export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(glow1Ref.current, {
        yPercent: 50,
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(glow2Ref.current, {
        yPercent: -30,
        xPercent: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="
relative 
min-h-screen 
flex 
items-center 
justify-center 
pt-28
px-6 
lg:px-8
overflow-hidden
bg-gradient-to-br 
from-[#fdfbff] 
via-[#fff5f8] 
to-[#f8f7ff]
"
id="home">
      <div ref={glow1Ref} className="ambient-glow -top-40 -left-40 opacity-40" />
      <div ref={glow2Ref} className="ambient-glow top-1/2 -right-40 opacity-30" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 ">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8F87F110_1px,transparent_1px),linear-gradient(to_bottom,#8F87F110_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <div>
          <TextReveal 
            text="Hi, I'm Samsun Nahar" 
            className="text-6xl lg:text-7xl font-extrabold mb-4 text-gray-800" 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-8"
          >
            Full Stack Web Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed font-medium"
          >
            I am a Full Stack Web Developer passionate about building modern, 
            responsive, and scalable web applications. I specialize in React, Next.js, 
            Node.js, and MongoDB to create clean user experiences and powerful digital solutions.
          </motion.p>
          <div className="flex flex-wrap items-center gap-6">
            <Magnetic>
<a
  href="/resume.pdf"
  download
  className="btn-gradient px-8 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-[0_10px_20px_rgba(143,135,241,0.2)]"
>
  Download Resume

  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>

</a>
            </Magnetic>
              <div className="flex items-center gap-4">
                {[
                  {
                    alt: "GitHub",
                    src: "/github.png",
                    link: "https://github.com/samsunnaharsrity",
                  },
                  {
                    alt: "LinkedIn",
                    src: "/linkedin.png",
                    link: "https://linkedin.com/in/samsunnahar",
                  },
                  {
                    alt:"Facebook",
                    src:"/facebook.png",
                    link:"https://facebook.com/..."
                  }
                ].map((social, idx) => (
                  <Magnetic key={idx}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-primary transition-all duration-300"
                    >
                      <Image
                        alt={social.alt}
                        width={24}
                        height={24}
                        src={social.src}
                        className="hover:scale-125 transition-transform"
                      />
                    </a>
                  </Magnetic>
                ))}
              </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
          >
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 left-0 bg-white/80 p-2 rounded-2xl shadow-lg border border-brand-primary/10 z-10 backdrop-blur-sm"
            >
              <Image alt="Node" width={32} height={32} 
              src="/node.png" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-10 -right-4 bg-white/80 p-2 rounded-2xl shadow-lg border border-brand-primary/10 z-10 backdrop-blur-sm"
            >
              <Image alt="HTML5" width={32} height={32} 
              src="/html.png" />
            </motion.div>
            <motion.div 
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 right-10 bg-white/80 p-2 rounded-2xl shadow-lg border border-brand-primary/10 z-10 backdrop-blur-sm"
            >
              <Image alt="React" width={32} height={32} 
              src="/react.png" />
            </motion.div>
            
            <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-brand-accent/20 profile-glow relative">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[3px] border-dashed border-brand-primary/20 rounded-full"
              />

              {/* main img */}
              <Image 
                alt="Samsun Nahar - Full Stack Web Developer" 
                 width={500}
                height={500} 
                className="w-full h-full object-cover transition duration-700 scale-110 hover:scale-100" 
                src="/p1.png" 
                style={{ objectPosition: '50% 10%' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
