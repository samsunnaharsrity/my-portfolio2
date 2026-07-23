'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

export default function MouseOrb() {

  const orbRef = useRef<HTMLDivElement>(null);
  const [mounted,setMounted] = useState(false);


  useEffect(()=>{

    setMounted(true);

    const orb = orbRef.current;

    if(!orb) return;


    const moveOrb = (e:MouseEvent)=>{

      gsap.to(orb,{
        x:e.clientX,
        y:e.clientY,
        duration:1.2,
        ease:"power3.out"
      });

    };


    window.addEventListener(
      "mousemove",
      moveOrb
    );


    return()=>{

      window.removeEventListener(
        "mousemove",
        moveOrb
      );

    };


  },[]);



  if(!mounted) return null;



  return (

    <div

    ref={orbRef}

    className="
    fixed
    top-0
    left-0
    w-[500px]
    h-[500px]
    -ml-[250px]
    -mt-[250px]
    pointer-events-none
    z-[9999]
    opacity-30
    hidden
    md:block
    "

    style={{

      background:
      'radial-gradient(circle, rgba(143,135,241,.3) 0%, rgba(233,165,241,.1) 50%, transparent 70%)',

      filter:"blur(80px)"

    }}

    />

  );

}