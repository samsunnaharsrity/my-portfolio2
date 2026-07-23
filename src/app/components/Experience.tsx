'use client';

import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

export default function Experience() {

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Personal Projects & Development Practice",
      duration: "2024 - Present",
      description:
        "Building full-stack web applications using modern technologies. Developed scalable frontend interfaces, REST APIs, authentication systems, database solutions, and responsive user experiences. Worked on real-world projects including marketplace, booking platforms, and AI-based applications.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Freelance & Practice Projects",
      duration: "2023 - 2024",
      description:
        "Created responsive and interactive user interfaces focusing on clean design, reusable components, animations, and better user experience. Converted ideas into modern web applications using frontend technologies.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion"
      ]
    }
  ];


  return (
    <section
      id="experience"
      className="py-24 px-6 max-w-7xl mx-auto"
    >

      <FadeIn>
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">
          Experience
        </h2>
      </FadeIn>


      <div className="max-w-4xl mx-auto space-y-8">

        {
          experiences.map((experience,index)=>(

            <FadeIn
              key={index}
              direction="right"
            >

              <motion.div

                whileHover={{
                  y:-8
                }}

                transition={{
                  type:"spring",
                  stiffness:200
                }}

                className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                p-8
                hover:border-brand-primary/30
                transition
                "

              >


                <div className="
                flex
                flex-col
                md:flex-row
                md:justify-between
                gap-4
                ">


                  <div>

                    <h3 className="
                    text-2xl
                    font-bold
                    text-gray-800
                    ">
                      {experience.role}
                    </h3>


                    <p className="
                    text-lg
                    font-semibold
                    gradient-text
                    mt-2
                    ">
                      {experience.company}
                    </p>

                  </div>


                  <span className="
                  text-gray-500
                  font-medium
                  ">
                    {experience.duration}
                  </span>


                </div>



                <p className="
                text-gray-600
                leading-relaxed
                mt-6
                ">
                  {experience.description}
                </p>



                <div className="
                flex
                flex-wrap
                gap-3
                mt-6
                ">

                {
                  experience.skills.map(skill=>(

                    <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-brand-primary/10
                    text-brand-primary
                    text-sm
                    font-semibold
                    "
                    >
                      {skill}
                    </span>

                  ))
                }

                </div>


              </motion.div>


            </FadeIn>

          ))
        }


      </div>


    </section>
  );
}