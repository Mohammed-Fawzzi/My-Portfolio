"use client";
import { jsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FadeRight } from "@/constants/animation";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function Js() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8 overflow-hidden">
      {jsData.map((project, index) => (
        <motion.div
          variants={FadeRight(index * 0.1)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          key={project.id}
          className="shadow-lg border border-neutral-700/60 relative group flex flex-col h-full rounded-xl"
        >
          {/* Image */}
          <div className="relative h-80">
            <Image src={project.image} fill={true} alt={project.title} className="rounded-t-xl" />
            {/* Layer */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            {/* Links to Demo and Code */}
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold bg-accent hover:bg-accent-HOVER text-primary p-2 mx-2 flex space-x-1 justify-center items-center rounded-md"
              >
                <span>Live</span> <FiExternalLink />
              </Link>
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold bg-accent hover:bg-accent-HOVER text-primary p-2 mx-2 flex space-x-1 justify-center items-center rounded-md"
              >
                <span>Code</span> <FaGithub />
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-xl font-semibold text-accent">
                {project.title}
              </h2>
              <p className="text-natural-300 my-5">{project.description}</p>
            </div>

            <div className="flex space-x-2 mt-2">
              {project.languages.map((lang, index) => (
                <span
                  key={index}
                  className="text-3xl border-2 border-accent rounded-md p-2 cursor-pointer hover:bg-accent hover:text-primary transition-colors duration-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
