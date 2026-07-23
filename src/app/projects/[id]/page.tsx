import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


const projects = [
  {
    id:"1",

    title:"StayNest",

    image:"/staynest.jpg",

    description:
    "StayNest is a full-stack accommodation booking platform where users can explore available stays, view property details, and manage bookings with a smooth and responsive experience.",


    role:
    "Full Stack Developer. Designed the UI, developed frontend components, created backend APIs, integrated database, and implemented authentication.",


    features:[
      "User authentication system",
      "Property listing and details page",
      "Booking management system",
      "Responsive design",
      "API integration"
    ],


    tech:[
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],


    live:"https://scic-a3.vercel.app",

    github:
    "https://github.com/samsunnaharsrity/scic-a3",


    challenges:
    "Implementing authentication, managing booking conflicts, connecting frontend with backend APIs, and creating a responsive user experience.",


    future:
    "Adding online payment, advanced search, reviews, wishlist system, and AI-based recommendations."
  },


  {
    id:"2",

    title:"Agentic AI",

    image:"/agenticAi.jpg",


    description:
    "Agentic AI is an AI-powered platform that provides intelligent tools including AI chat assistant, content generation, analytics dashboard, and user management features.",


    role:
    "Full Stack Developer. Built AI features, frontend interface, backend API system, authentication, and database management.",


    features:[
      "AI Chat Assistant",
      "AI Content Generator",
      "Analytics Dashboard",
      "User Management",
      "AI API Integration"
    ],


    tech:[
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI"
    ],


    live:
    "https://scic-a-5.vercel.app",


    github:
    "https://github.com/samsunnaharsrity/scic-a-5",


    challenges:
    "Integrating AI APIs, handling AI responses, managing authentication, solving API errors, and designing scalable AI features.",


    future:
    "Adding voice assistant, more AI agents, document intelligence, automation workflow, and advanced analytics."
  },


  {
    id:"3",

    title:"ArtHub",

    image:"/arthub.jpg",


    description:
    "ArtHub is an online art marketplace where artists can showcase artworks and buyers can explore and purchase creative products.",


    role:
    "Full Stack Developer. Developed marketplace features, authentication system, payment integration, and responsive user interface.",


    features:[
      "Artist dashboard",
      "Artwork management",
      "Buyer purchase system",
      "Stripe payment",
      "Role based authentication"
    ],


    tech:[
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe"
    ],


    live:
    "https://my-arthub.vercel.app",


    github:
    "https://github.com/samsunnaharsrity/my-arthub",


    challenges:
    "Implementing role-based authentication, payment workflow, artwork management, and marketplace functionality.",


    future:
    "Adding AI recommendation, real-time chat, artist analytics, and advanced filtering."
  }

];





export default async function ProjectDetails({

params

}:{
params:Promise<{id:string}>
}){


const {id}=await params;


const project=projects.find(
item=>item.id===id
);



if(!project){

notFound();

}



return (

<section className="
min-h-screen
py-24
px-6
max-w-6xl
mx-auto
">


<Link

href="/#projects"

className="
text-brand-primary
font-bold
"

>

← Back To Projects

</Link>





<div className="
mt-10
bg-white
rounded-3xl
shadow-xl
border
p-6 md:p-10
">


<Image

src={project.image}

alt={project.title}

width={1200}

height={600}

className="
rounded-2xl
w-full
h-[300px]
md:h-[450px]
object-cover
"

/>





<h1 className="
text-4xl
md:text-5xl
font-bold
mt-10
text-gray-800
">

{project.title}

</h1>





<p className="
text-gray-600
text-lg
leading-relaxed
mt-5
">

{project.description}

</p>







<h2 className="
text-3xl
font-bold
mt-12
">

My Role

</h2>


<p className="
text-gray-600
mt-4
leading-relaxed
">

{project.role}

</p>







<h2 className="
text-3xl
font-bold
mt-12
">

Key Features

</h2>


<ul className="
mt-5
space-y-3
text-gray-600
">

{

project.features.map(feature=>(

<li key={feature}>

✓ {feature}

</li>

))

}

</ul>







<h2 className="
text-3xl
font-bold
mt-12
">

Technology Stack

</h2>


<div className="
flex
flex-wrap
gap-3
mt-5
">


{

project.tech.map(skill=>(

<span

key={skill}

className="
px-4
py-2
rounded-full
bg-brand-primary/10
text-brand-primary
font-semibold
"

>

{skill}

</span>


))

}


</div>







<h2 className="
text-3xl
font-bold
mt-12
">

Challenges Faced

</h2>


<p className="
text-gray-600
mt-4
leading-relaxed
">

{project.challenges}

</p>






<h2 className="
text-3xl
font-bold
mt-12
">

Future Improvements

</h2>


<p className="
text-gray-600
mt-4
leading-relaxed
">

{project.future}

</p>







<div className="
flex
flex-wrap
gap-5
mt-12
">


<a

href={project.live}

target="_blank"

className="
btn-gradient
px-7
py-3
rounded-xl
font-bold
"

>

Live Project

</a>




<a

href={project.github}

target="_blank"

className="
border
px-7
py-3
rounded-xl
font-bold
hover:bg-gray-100
"

>

GitHub Repository

</a>



</div>



</div>


</section>

)

}