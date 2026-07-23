'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from './animations/Fadeln';


const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: "/html.png", level: 9 },
      { name: "CSS", icon: "/css.png", level: 8 },
      { name: "JavaScript", icon: "/js.png", level: 8 },
      { name: "React", icon: "/react.png", level: 9 },
      { name: "Next.js", icon: "/next.png", level: 8 },
      { name: "Tailwind CSS", icon: "/tailwind.png", level: 9 },
    ]
  },


  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "/node.png", level: 8 },
      { name: "Express.js", icon: "/express.png", level: 8 },
      { name: "MongoDB", icon: "/mongodb.png", level: 8 },
    ]
  },


  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "/git.png", level: 8 },
      { name: "GitHub", icon: "/github.png", level: 8 },
      { name: "VS Code", icon: "/vscode.png", level: 9 },
    ]
  }

];


export default function Skills() {


  return (

    <section 
      className="py-24 px-6 max-w-7xl mx-auto"
      id="skills"
    >


      <FadeIn>

        <h2 className="
        text-5xl 
        font-bold 
        text-center 
        mb-20 
        text-gray-800
        ">
          My Skills
        </h2>

      </FadeIn>



      <div className="
      grid 
      grid-cols-1 
      lg:grid-cols-3 
      gap-8
      ">


        {
          skillCategories.map((category,index)=>(


            <FadeIn 
              key={category.title}
              delay={index * 0.1}
              direction="up"
            >


              <div className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              border
              border-gray-100
              h-full
              ">


                <h3 className="
                text-xl
                font-bold
                mb-8
                text-gray-800
                ">
                  {category.title}
                </h3>



                <div className="space-y-6">


                {
                  category.skills.map((skill)=>(
                    

                    <div 
                    key={skill.name}
                    className="group"
                    >


                      <div className="
                      flex
                      items-center
                      justify-between
                      mb-3
                      ">


                        <div className="
                        flex
                        items-center
                        gap-3
                        ">


                          <div className="
                          p-2
                          bg-gray-50
                          rounded-lg
                          ">

                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={25}
                              height={25}
                              className="
                              w-6
                              h-6
                              "
                            />

                          </div>


                          <span className="
                          font-semibold
                          text-gray-700
                          ">
                            {skill.name}
                          </span>


                        </div>



                        <span className="
                        text-sm
                        text-gray-500
                        ">
                          {skill.level * 10}%
                        </span>


                      </div>




                      {/* Progress Bar */}

                      <div className="
                      w-full
                      h-2
                      bg-gray-200
                      rounded-full
                      overflow-hidden
                      ">


                        <motion.div

                          initial={{
                            width:0
                          }}

                          whileInView={{
                            width:`${skill.level * 10}%`
                          }}

                          viewport={{
                            once:true
                          }}

                          transition={{
                            duration:1
                          }}

                          className="
                          h-full
                          bg-brand-primary
                          rounded-full
                          "

                        />


                      </div>


                    </div>


                  ))
                }


                </div>



              </div>


            </FadeIn>


          ))
        }


      </div>


    </section>

  );

}