'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

export default function About() {

  const services = [
    {
      title: "Frontend Development",
      icon: "💻"
    },
    {
      title: "Full Stack Web Development",
      icon: "🚀"
    },
    {
      title: "UI/UX & Problem Solving",
      icon: "✨"
    }
  ];


  return (
    <section 
      className="py-24 px-6 max-w-7xl mx-auto" 
      id="about"
    >

      <FadeIn>
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-800">
          About Me
        </h2>
      </FadeIn>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">


        {/* Image */}

        <FadeIn direction="right">

          <div className="flex justify-center">

            <motion.div
              whileHover={{
                scale:1.05,
                rotate:2
              }}
              transition={{
                type:"spring",
                stiffness:300
              }}
              className="
              w-80 h-80
            lg:w-[450px]
            lg:h-[450px]
            rounded-full
            overflow-hidden
            border-8
            border-white
            shadow-2xl
              "
            >

              <Image

                src="/p2.jpg"

                alt="Samsun Nahar"

                width={450}

                height={450}

                className="
                w-full
                h-full
                object-cover
                "
                
                style={{
                  objectPosition:"25% 45%"
                }}

              />

            </motion.div>

          </div>

        </FadeIn>




        {/* Content */}


        <div>


        <FadeIn direction="left">


          <h3 className="
          text-3xl
          font-bold
          mb-6
          text-gray-800
          ">
            
            I'm 
            <span className="gradient-text">
              {" "}Samsun Nahar
            </span>

          </h3>



          <p className="
          text-gray-600
          text-lg
          leading-relaxed
          mb-6
          ">


I am a Full Stack Web Developer passionate about building modern,
responsive, and scalable web applications.

<br/><br/>

My journey started with HTML, CSS, and JavaScript. 
Later, I explored React, Next.js, Node.js, Express.js, and MongoDB 
to build complete full-stack applications.

<br/><br/>

I enjoy creating clean UI, solving complex problems,
and building interactive digital experiences with modern
design principles and smooth animations.

<br/><br/>

Outside programming, I love exploring new technologies,
creative design, and continuous learning.


          </p>


        </FadeIn>



        {/* Services */}


        <FadeIn direction="up">


          <div className="space-y-4 mt-8">


            {
              services.map((service,index)=>(

                <motion.div

                key={index}

                whileHover={{
                  x:10
                }}

                className="
                p-3
                rounded-2xl
                bg-white
                shadow-md
                flex
                items-center
                gap-5
                border
                "

                >


                  <div className="
                  text-3xl
                  bg-brand-primary/10
                  p-3
                  rounded-xl
                  ">
                    {service.icon}
                  </div>


                  <h4 className="
                  font-bold
                  text-gray-700
                  ">
                    {service.title}
                  </h4>


                </motion.div>


              ))
            }


          </div>


        </FadeIn>


        </div>


      </div>


    </section>
  );
}