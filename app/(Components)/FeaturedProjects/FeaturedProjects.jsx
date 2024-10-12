"use client";
import { featuredProjectsData } from "@/constants";
import { FadeLeft } from "@/constants/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function FeaturedProjects() {
  return (
    <section className="py-5">
      <div className="container overflow-hidden">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Featured <span className="text-accent">Projects</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8">
          {featuredProjectsData.map((project, index) => (
            <motion.div
              variants={FadeLeft(index * 0.1)}
              initial="hidden"
              whileInView={"visible"}
              key={project.id}
              className="shadow-lg border border-neutral-700/80 relative group"
            >
              {/* Image */}
              <div className="relative h-80">
                <Image src={project.image} layout="fill" alt={project.title} />
                {/* Layer */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                {/* Demo Link */}
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-lg font-semibold bg-accent hover:bg-accent-HOVER text-primary p-2 rounded-lg flex space-x-1 justify-center items-center">
                    <span>View Demo</span> <MdArrowOutward />
                  </p>
                </Link>
              </div>
              {/* Info */}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-accent">
                  {project.title}
                </h2>
                <p className="text-natural-300 my-5">{project.description}</p>
                <div className="flex space-x-2 mt-2">
                  {project.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="text-3xl border-2 border-accent p-2 rounded-lg cursor-pointer hover:bg-accent hover:text-primary transition-colors duration-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
