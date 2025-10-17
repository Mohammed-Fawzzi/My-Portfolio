"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "@/constants/animation";
import Photo from "../hero/Photo";
import { contactData } from "@/constants";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto py-4 overflow-hidden">
        <div className="h2 text-center">
          Contact <span className="text-accent">Me</span>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-14">
          <div className="mt-5">
            <Photo />
          </div>
          <div className="flex flex-col space-y-7 mb-4 rounded-lg p-4 w-full">
            <div className="space-y-2">
              <motion.div
                variants={FadeRight(0.3)}
                initial="hidden"
                animate="visible"
                className="border-l-4 border-accent p-3 rounded-t-lg rounded-b-lg shadow-lg"
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
                className="flex items-center justify-between w-full gap-3"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-[52px] h-[52px] flex justify-center items-center bg-[#27272c] shadow-xl">
                    {item.icon}
                  </div>
                  <span
                    onClick={() =>
                      item.link
                        ? window.open(item.link, "_blank")
                        : handleCopy(item.text)
                    }
                    className="flex-1 text-left text-[14px] md:text-[16px] border font-bold border-accent text-accent cursor-pointer hover:bg-accent-HOVER hover:text-primary transition-all duration-300 p-[10px] md:p-[9px]"
                  >
                    {item.text}
                  </span>
                </div>
                <FaRegCopy
                  onClick={() => handleCopy(item.text)}
                  className="text-accent text-lg cursor-pointer hover:text-accent-HOVER transition"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
