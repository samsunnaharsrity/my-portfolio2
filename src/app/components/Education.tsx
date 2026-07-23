'use client';

import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

export default function Education() {

  const education = [
    {
      degree: "Diploma in Engineering",
      subject: "Computer Technology",
      institute: "Desh Polytechnic College",
      duration: "2020 - 2024",
      description:
        "Completed Diploma in Computer Technology with practical knowledge of programming, software development, database management, web technologies, and computer systems. During this journey, I developed my interest in full-stack web development."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      subject: "Commerce",
      institute: "Hazi Moazzem Ali High School",
      duration: "2018 - 2020",
      description:
        "Completed Secondary School Certificate with a strong foundation in business studies, accounting, finance, and general education."
    }
  ];


  return (
    <section
      id="education"
      className="py-24 px-6 max-w-7xl mx-auto"
    >

      <FadeIn>
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">
          Education
        </h2>
      </FadeIn>


      <div className="relative max-w-4xl mx-auto">

        {/* Timeline line */}
        <div className="
        absolute
        left-5
        top-0
        bottom-0
        w-1
        bg-brand-primary/20
        rounded-full
        " />


        <div className="space-y-10">

          {
            education.map((item,index)=>(

              <FadeIn
                key={index}
                direction="right"
              >

                <motion.div

                  whileHover={{
                    y:-5
                  }}

                  className="
                  relative
                  ml-12
                  bg-white
                  rounded-2xl
                  shadow-lg
                  border
                  p-8
                  "

                >


                  {/* Circle */}
                  <div className="
                  absolute
                  -left-[43px]
                  top-8
                  w-6
                  h-6
                  rounded-full
                  bg-brand-primary
                  border-4
                  border-white
                  shadow
                  " />


                  <h3 className="
                  text-2xl
                  font-bold
                  text-gray-800
                  ">
                    {item.degree}
                  </h3>


                  <h4 className="
                  text-lg
                  font-semibold
                  gradient-text
                  mt-2
                  ">
                    {item.subject}
                  </h4>


                  <p className="
                  text-gray-600
                  mt-3
                  font-medium
                  ">
                    {item.institute}
                  </p>


                  <p className="
                  text-sm
                  text-gray-500
                  mt-1
                  ">
                    {item.duration}
                  </p>


                  <p className="
                  text-gray-600
                  leading-relaxed
                  mt-5
                  ">
                    {item.description}
                  </p>


                </motion.div>


              </FadeIn>

            ))
          }

        </div>

      </div>


    </section>
  );
}