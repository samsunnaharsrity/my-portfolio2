'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './animations/FadeIn';
import Magnetic from './animations/Magnetic';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';


const projects = [
  {
    id: "1",
    title: "StayNest",
    category: "Web Application",

    description:
      "StayNest is a full-stack accommodation booking platform where users can explore available stays, view property details, and manage bookings with a smooth and responsive experience.",

    image: "/staynest.jpg",

    repo:
      "https://github.com/samsunnaharsrity/scic-a3",

    demo:
      "https://scic-a3.vercel.app"
  },


  {
    id: "2",
    title: "Agentic AI",
    category: "Web Application",

    description:
      "Agentic AI is an AI-powered platform that provides intelligent tools including AI chat assistant, content generation, analytics, and user management features.",

    image: "/agenticAi.jpg",

    repo:
      "https://github.com/samsunnaharsrity/scic-a-5",

    demo:
      "https://scic-a-5.vercel.app"
  },


  {
    id: "3",
    title: "ArtHub",
    category: "Web Application",

    description:
      "ArtHub is an online art marketplace where artists can showcase artworks and buyers can explore and purchase creative products through a modern digital platform.",

    image: "/arthub.jpg",

    repo:
      "https://github.com/samsunnaharsrity/my-arthub",

    demo:
      "https://my-arthub.vercel.app"
  }
];



function ProjectCard({
 project
}:{
 project: typeof projects[0]
}) {


return (

<motion.div

whileHover={{
 y:-10
}}

transition={{
 duration:0.3
}}

className="
glass-card
rounded-3xl
overflow-hidden
p-6
flex
flex-col
h-full
"

>


<div className="
relative
aspect-video
rounded-2xl
overflow-hidden
group
bg-gray-100
">


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover
transition-transform
duration-700
group-hover:scale-110
"

/>


<div className="
absolute
inset-0
bg-black/40
opacity-0
group-hover:opacity-100
transition
flex
items-center
justify-center
">


<Link

href={`/projects/${project.id}`}

className="
bg-brand-primary
text-white
px-6
py-3
rounded-full
font-bold
"

>

View Details

</Link>


</div>


</div>




<h3 className="
text-2xl
font-bold
text-gray-800
mt-6
">

{project.title}

</h3>



<p className="
text-gray-600
mt-3
leading-relaxed
text-sm
flex-grow
">

{project.description}

</p>



<div className="
flex
justify-between
items-center
mt-6
gap-3
">


<Magnetic>

<a

href={project.repo}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-2
font-semibold
text-brand-primary
"

>

Repository

<Image

src="/github.png"

alt="Github"

width={18}

height={18}

/>


</a>

</Magnetic>



<Magnetic>

<a

href={project.demo}

target="_blank"

rel="noopener noreferrer"

className="
btn-gradient
px-5
py-2
rounded-xl
flex
items-center
gap-2
font-bold
text-sm
"

>

Demo

<FaPlay size={12}/>


</a>


</Magnetic>


</div>



</motion.div>

)

}





export default function Projects(){


const [activeCategory,setActiveCategory]=useState(
"Web Application"
);



return (

<section

id="projects"

className="
py-24
px-6
max-w-6xl
mx-auto
"


>


<FadeIn>

<h2 className="
text-5xl
font-bold
text-center
mb-16
text-gray-800
">

My Projects

</h2>


</FadeIn>



<div className="
flex
justify-center
mb-12
">


<button

onClick={()=>setActiveCategory("Web Application")}

className="
px-8
py-3
rounded-xl
bg-brand-primary
text-white
font-bold
"

>

Web Application

</button>


</div>





<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
">


<AnimatePresence>


{

projects

.filter(
p=>p.category===activeCategory
)

.map((project,index)=>(


<FadeIn

key={project.id}

delay={index*0.1}

className="h-full"

>


<ProjectCard project={project}/>


</FadeIn>


))


}



</AnimatePresence>


</div>



</section>

)

}