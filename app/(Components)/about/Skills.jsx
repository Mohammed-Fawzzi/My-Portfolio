"use client";
import React, { useState } from "react";
import { skillsData } from "@/app/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [active, setActive] = useState("languages");
  const tabSkills = [
    { key: "languages", label: "Languages & Markup" },
    { key: "frameworks", label: "Frameworks" },
    { key: "stateManagement", label: "State Management" },
    { key: "styling", label: "Styling & Animation" },
    { key: "api", label: "APIs & Integration" },
    { key: "testing", label: "Testing" },
    { key: "tools", label: "Version Control & Tools" },
  ];
  
  return (
    <section className="py-16 overflow-x-hidden">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Technical <span className="text-accent">Skills</span>
          </h1>
        </div>

        {/* Tabs — grid on mobile/tablet, equal flex row on lg+ */}
        <div className="mb-10 w-full overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full lg:flex lg:flex-row lg:items-stretch lg:gap-2">
            {tabSkills.map((item) => (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className={`
                  w-full lg:flex-1 lg:min-w-0
                  min-h-[44px] lg:min-h-[52px]
                  flex items-center justify-center
                  rounded-md text-center leading-snug
                  text-[11px] sm:text-xs lg:text-[11.2px] 
                  border border-neutral-700/60
                  transition-colors duration-300 
                  ${
                    active === item.key
                      ? "bg-accent text-on-accent"
                      : "text-neutral-400 hover:text-neutral-100"
                  }
                `}
              >
                <span className="block max-w-full font-bold">{item.label}</span>
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
