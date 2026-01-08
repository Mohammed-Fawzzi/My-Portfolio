"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "@/constants/animation";
import { contactData } from "@/constants";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="h-full">
      <div className="container mx-auto py-8 overflow-hidden px-4">
        <div className="h2 text-center mb-10">
          Contact <span className="text-accent">Me</span>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-14">
          {/* Image */}
          <div className="w-full xl:w-1/2 flex justify-center">
            <Image
              src="/avatar.webp"
              alt="avatar"
              width={500}
              height={500}
              className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-7 mb-4 rounded-lg p-4 w-full xl:w-1/2">
            <div className="space-y-2">
              <motion.div
                variants={FadeRight(0.3)}
                initial="hidden"
                animate="visible"
                className="border-l-4 border-accent p-3 rounded-lg shadow-lg"
              >
                <motion.h1
                  variants={FadeUp(0.3)}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl font-bold"
                >
                  Lets <span className="text-accent">Talk!</span>
                </motion.h1>
              </motion.div>

              <motion.p
                variants={FadeUp(0.6)}
                initial="hidden"
                animate="visible"
                className="text-neutral-300"
              >
                Feel free to reach out through any means, I am always ready to
                connect and work together.
              </motion.p>
            </div>

            {contactData.map((item) => (
              <motion.div
                key={item.id}
                variants={FadeLeft(0.9 + item.id * 0.3)}
                initial="hidden"
                animate="visible"
                className="flex items-center w-full gap-3"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-[52px] h-[52px] flex justify-center items-center bg-[#27272c] shadow-xl shrink-0">
                    {item.icon}
                  </div>

                  <span
                    onClick={() =>
                      item.link
                        ? window.open(item.link, "_blank")
                        : handleCopy(item.text)
                    }
                    className="
                      flex-1 text-center
                      text-xs md:text-[16px]
                      border font-bold
                      border-accent text-accent
                      cursor-pointer
                      hover:bg-accent-HOVER hover:text-primary
                      transition-all duration-300
                      p-[16px] w-fit
                    "
                  >
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
