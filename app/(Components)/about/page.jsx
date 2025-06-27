"use client";
import React from "react";
import { FaLaptopCode, FaTools, FaUserGraduate } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "@/constants/animation";
import Skills from "./Skills";
import Services from "./Services";

export default function About() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          {/* Title */}
          <div className="h2 text-center">
            About <span className="text-accent">Me</span>
          </div>

          <div className="container py-6 overflow-hidden">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-primary">
              {/* Education */}
              <div className="flex flex-row-reverse md:contents">
                <motion.div
                  variants={FadeLeft(0)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: false }}
                  className="bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                >
                  <h3 className="font-semibold text-2xl mb-1 flex space-x-2 items-center">
                    <FaUserGraduate /> <span>Education</span>
                  </h3>
                  <p className="leading-tight font-semibold">
                    Bachelor's degree in Computer Science with a strong
                    foundation in software development and web technologies.
                  </p>
                </motion.div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-accent hover:bg-accent-hover pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
              </div>

              {/* Experience */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-accent hover:bg-accent-hover pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
                <motion.div
                  variants={FadeRight(0.4)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: false }}
                  className="bg-accent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                >
                  <h3 className="font-semibold text-2xl mb-1 flex space-x-2 items-center">
                    <GrUserExpert /> <span>Experience</span>
                  </h3>
                  <p className="leading-tight font-semibold">
                    I have over 1 year of experience as a Front-End Developer
                    and have completed more than 30 projects, including several
                    where I integrated APIs.
                  </p>
                </motion.div>
              </div>

              {/* Technical Skills */}
              <div className="flex flex-row-reverse md:contents">
                <motion.div
                  variants={FadeLeft(0.8)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: false }}
                  className="bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                >
                  <h3 className="font-semibold text-2xl mb-1 flex space-x-2 items-center">
                    <FaTools /> <span>Technical Skills</span>
                  </h3>
                  <p className="leading-tight font-semibold">
                    I have a solid foundation in technical skills, including
                    front-end development, API integration, and responsive
                    design, allowing me to build efficient and user-friendly web
                    applications.
                  </p>
                </motion.div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-accent hover:bg-accent-hover pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
              </div>

              {/* Freelancing */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-accent hover:bg-accent-hover pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                </div>
                <motion.div
                  variants={FadeRight(0.4)}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: false }}
                  className="bg-accent col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                >
                  <h3 className="font-semibold text-2xl mb-1 flex space-x-2 items-center">
                    <FaLaptopCode /> <span>Freelancing</span>
                  </h3>
                  <p className="leading-tight font-semibold">
                    I work as a freelance front-end developer, building
                    responsive and modern web applications using React.js and
                    Next.js. I collaborate directly with clients to deliver
                    real-world solutions focused on performance, accessibility,
                    and user experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <Skills />

      {/* Skills */}
      <Services />
    </>
  );
}
