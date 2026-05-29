"use client";
import { socials } from "@/app/constants";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Stats from "./Stats";
import { motion } from "framer-motion";
import { FadeRight } from "@/app/constants/animation";
import Image from "next/image";
import About from "../about/page";

export default function Hero() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Info */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.h1
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="h2 mb-6"
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
              className="text-neutral-300 max-w-[500px] mb-6"
            >
              React Developer with 2+ years of experience building web and mobile applications using React.js, Next.js, and React Native. Skilled in converting Figma designs into responsive interfaces, integrating RESTful APIs, and managing state with Redux Toolkit, React Query, and Context API. Passionate about clean code, performance, and user experience.
            </motion.p>
            <motion.div
              variants={FadeRight(1.8)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center md:flex-row md:space-x-4"
            >
              <Link href="/MohamedFawzziCV.pdf" download target="_blank">
                <button className="font-bold border border-accent text-accent hover:bg-accent-HOVER hover:text-primary py-2 px-5 rounded-full transition-all duration-300 flex items-center justify-center">
                  <span>Download Cv</span>{" "}
                  <FiDownload className="ml-2 text-icons" />
                </button>
              </Link>
              <div className="flex justify-center items-center space-x-4 md:space-x-3 mt-4 md:mt-0">
                {socials.map((item) => (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                  >
                    <div className="flex items-center justify-center w-12 h-12 border border-accent text-accent hover:bg-accent-HOVER hover:text-primary rounded-full transition-all duration-300 text-icons mb-8 xl:mb-0">
                      {item.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-12">
            <Image src={"/avatar.webp"} alt="avatar" className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]" width={400} height={200} />
          </div>
        </div>
      </div>
      {/* States */}
      <Stats />

      {/* About without skills and services */}
      <About showExtras={false} />
    </section>
  );
}
