"use client";
import React from "react";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "@/constants/animation";
import Ui from "./Ui";
import Js from "./Js";
import ReactAndNext from "./reactAndNext";

export default function Projects() {
  return (
    <section className="py-5">
      <div className="container overflow-hidden">
        {/* Title */}
        <div className="h2 text-center">
          My <span className="text-accent">Projects</span>
        </div>

        {/* React and Next js Projects */}
        <motion.div
          variants={FadeRight(0.3)}
          initial="hidden"
          animate="visible"
          className="border-l-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
        >
          <motion.h1
            variants={FadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold"
          >
            <span className="text-accent">React and Next Js </span> projects
          </motion.h1>
        </motion.div>
        <ReactAndNext />

        {/* Js Projects */}
        <motion.div
          variants={FadeRight(0.3)}
          initial="hidden"
          animate="visible"
          className="border-l-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
        >
          <motion.h1
            variants={FadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold"
          >
            <span className="text-accent">Javascript </span> projects
          </motion.h1>
        </motion.div>
        <Js />

        {/* Ui Projects */}
        <motion.div
          variants={FadeRight(0.3)}
          initial="hidden"
          animate="visible"
          className="border-l-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
        >
          <motion.h1
            variants={FadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold"
          >
            <span className="text-accent">UI </span> projects
          </motion.h1>
        </motion.div>
        <Ui />
      </div>
    </section>
  );
}
