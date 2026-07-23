'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import FadeIn from './animations/FadeIn';
import Magnetic from './animations/Magnetic';



export default function Footer() {


const navLinks = [
  {name:'Home', href:'#home'},
  {name:'About', href:'#about'},
  {name:'Skills', href:'#skills'},
  {name:'Projects', href:'#projects'},
  {name:'Contact', href:'#contact'},
];



const socials=[
  {
    name:'Github',
    icon:'/github.png',
    href:'https://github.com/samsunnaharsrity'
  },
  {
    name:'LinkedIn',
    icon:'/linkedin.png',
    href:'https://linkedin.com/in/samsunnahar'
  },
  {
    name:'Email',
    icon:'/gmail.png',
    href:'mailto:samsunnaharsrity@gmail.com'
  }
];



return (

<footer

className="
relative
mt-10
border-t
border-brand-primary/10
bg-white/60
backdrop-blur-xl
py-16
px-6
overflow-hidden
"

>


{/* Glow */}

<div

className="
absolute
top-0
left-1/2
-translate-x-1/2
w-96
h-40
bg-brand-primary/10
blur-3xl
rounded-full
"

/>



<FadeIn>


<div

className="
relative
max-w-7xl
mx-auto
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-12
"

>



{/* Brand */}


<div className="lg:col-span-2">


<h2

className="
text-4xl
font-extrabold
bg-gradient-to-r
from-brand-primary
to-brand-secondary
bg-clip-text
text-transparent
"

>

Samsun Nahar

</h2>



<p

className="
mt-5
max-w-md
text-gray-500
leading-relaxed
"

>

Full Stack Web Developer specializing in building
modern, scalable and responsive web applications
with clean user experiences.

</p>



<div

className="
mt-6
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-brand-primary/10
text-brand-primary
text-sm
font-semibold
"

>

● Available for freelance projects

</div>



</div>








{/* Navigation */}



<div>


<h3

className="
text-lg
font-bold
text-gray-800
mb-6
"

>

Navigation

</h3>



<ul

className="
space-y-4
text-gray-500
font-medium
"

>


{
navLinks.map(link=>(


<li key={link.name}>


<Magnetic>


<Link

href={link.href}

className="
hover:text-brand-primary
transition-colors
duration-300
"

>

{link.name}

</Link>


</Magnetic>


</li>


))
}


</ul>


</div>










{/* Connect */}



<div>


<h3

className="
text-lg
font-bold
text-gray-800
mb-6
"

>

Connect

</h3>




<div

className="
flex
gap-4
"

>


{
socials.map(item=>(


<Magnetic key={item.name}>


<a

href={item.href}

target="_blank"

rel="noopener noreferrer"

title={item.name}

className="
group
p-3
rounded-xl
bg-white
border
border-gray-100
shadow-sm
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
"

>


<Image

src={item.icon}

alt={item.name}

width={26}

height={26}

className="
opacity-70
group-hover:opacity-100
group-hover:scale-110
transition
"

/>


</a>


</Magnetic>


))
}


</div>





<p
className="
mt-8
text-sm
text-gray-400
leading-relaxed
"
>
Building modern web experiences with <span className="font-semibold text-gray-600">
  Next.js
</span>
, 
<span className="font-semibold text-gray-600">
 TypeScript
</span> and <span className="font-semibold text-gray-600">
 Tailwind CSS
</span>
 ✨
</p>


</div>



</div>








{/* Divider */}


<motion.div

initial={{
scaleX:0
}}

whileInView={{
scaleX:1
}}

transition={{
duration:1
}}

className="
mt-14
h-[1px]
bg-gradient-to-r
from-transparent
via-brand-primary/40
to-transparent
"

/>






{/* Bottom */}


<div

className="
mt-8
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
text-sm
text-gray-400
"

>


<p>

© {new Date().getFullYear()} 
<span className="font-semibold text-gray-600">
&nbsp;Samsun Nahar
</span>
. All rights reserved.

</p>



<p>

Designed & Developed by Samsun Nahar

</p>


</div>



</FadeIn>


</footer>

);

}