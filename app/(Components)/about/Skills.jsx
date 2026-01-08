"use client";
import React, { useState } from "react";
import { skillsData } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [active, setActive] = useState("languages");
  const tabSkills = [
    { key: "languages", label: "Languages & Markup" },
    { key: "frameworks", label: "Frameworks & Libraries" },
    { key: "styling", label: "Styling & Animation" },
    { key: "api", label: "APIs & Integration" },
    { key: "tools", label: "Version Control & Tools" },
  ];
  
  return (
    <section className="py-16">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Technical <span className="text-accent">Skills</span>
          </h1>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5 
            gap-3 
            w-full
          ">
            {tabSkills.map((item) => (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`
                  relative px-5 py-2 rounded-md
                  text-sm font-medium
                  border border-neutral-700/60
                  transition-all duration-300
                  ${
                    active === item.key
                      ? "text-primary"
                      : "text-neutral-400 hover:text-neutral-100"
                  }
                `}
              >
                {active === item.key && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-md bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {skillsData[active].map((skill) => (
              <div
                key={skill.id}
                className="group relative flex flex-col items-center justify-center
                h-44 rounded-xl border border-neutral-700/60 bg-transparent
                hover:border-accent transition-all duration-300"
              >
                <div className="text-5xl text-accent mb-4 group-hover:scale-110 transition">
                  {skill.icon}
                </div>
                <p className="text-lg font-semibold">{skill.title}</p>

                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-accent/10"></div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
