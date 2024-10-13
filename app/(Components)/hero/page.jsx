"use client";
import { socials } from "@/constants";
import Link from "next/link";
import React from "react";
import Photo from "./Photo";
import { FiDownload } from "react-icons/fi";
import Stats from "./Stats";
import { motion } from "framer-motion";
import { FadeRight } from "@/constants/animation";

export default function Hero() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Info */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.span
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-xl text-accent text-center md:text-left"
            >
              Front End Developer
            </motion.span>
            <motion.h1
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="h1 mb-6"
            >
              Hello, I am <br />
              <motion.span
                variants={FadeRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-accent"
              >
                Mohamed Fawzzi
              </motion.span>
            </motion.h1>
            <motion.p
              variants={FadeRight(1.6)}
              initial="hidden"
              animate="visible"
              className="text-neutral-300 max-w-[500px] mb-9"
            >
              Front-End developer specializing in building interactive and
              seamless user interfaces using React and Next.js. I believe in the
              importance of detail in design and user experience, and I always
              strive to deliver applications that are fast, efficient, and easy
              to use.
            </motion.p>
            <motion.div
              variants={FadeRight(1.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center md:flex-row md:space-x-6"
            >
              <Link href="/MohamedFawzziCv.pdf" download>
                <button className="font-bold border border-accent text-accent hover:bg-accent-HOVER hover:text-primary py-2 px-5 rounded-full transition-all duration-500 flex items-center justify-center">
                  <span>Download CV</span>{" "}
                  <FiDownload className="ml-2 text-icons" />
                </button>
              </Link>
              <div className="flex justify-center items-center space-x-6 md:space-x-4 mt-4 md:mt-0">
                {socials.map((item) => (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                  >
                    <div className="flex items-center justify-center w-12 h-12 border border-accent text-accent hover:bg-accent-HOVER hover:text-primary rounded-full transition-all duration-500 text-icons mb-8 xl:mb-0">
                      {item.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 mt-5">
            <Photo />
          </div>
        </div>
      </div>
      {/* States */}
      <Stats />
    </section>
  );
}
