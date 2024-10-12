"use client";
import React from "react";
import Photo from "./(Components)/hero/Photo";
import { motion } from "framer-motion";
import { FadeLeft } from "@/constants/animation";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-full bg-primary text-white my-14">
      <div className="container mx-auto h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-14">
          {/* Photo */}
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>

          {/* Info */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <motion.span
              variants={FadeLeft(0.3)}
              initial="hidden"
              animate="visible"
              className="text-xl text-accent"
            >
              404
            </motion.span>
            <motion.h1
              variants={FadeLeft(0.6)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold my-4"
            >
              Oops! Page Not Found
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              className="text-neutral-300 max-w-lg mb-6"
            >
              It seems the page you are looking for does not exist. If you typed
              the URL, please check for any errors.
            </motion.p>
            <motion.p
              variants={FadeLeft(1.2)}
              initial="hidden"
              animate="visible"
              className="text-neutral-400 mb-9"
            >
              {" "}
              You can go back home or explore other sections of my portfolio.
            </motion.p>
            <motion.a
              href="/"
              variants={FadeLeft(1.6)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center bg-accent text-primary font-bold px-6 py-2 rounded hover:bg-accent-dark transition"
            >
              <FaArrowAltCircleLeft className="mr-2" />
              <span>Back To Home</span>
            </motion.a>
            <motion.p
              variants={FadeLeft(1.9)}
              initial="hidden"
              animate="visible"
              className="text-neutral-400 mt-4"
            >
              If you need assistance, feel free to{" "}
              <Link href="/contact" className="text-accent">
                contact me
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
