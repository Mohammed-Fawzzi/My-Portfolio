import { technicalSkills } from "@/constants";
import React from "react";

export default function Skills() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            My <span className="text-accent">Skills</span>
          </h1>
        </div>
      </div>
      {/* Skills */}
      <div className="container my-10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {technicalSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="flex flex-col justify-center items-center shadow-lg p-5 border border-neutral-700/80 rounded-md cursor-pointer hover:bg-accent-HOVER hover:text-primary hover:border-accent-HOVER transition-colors duration-300"
            >
              <div className="h1 my-5">{skill.icon}</div>
              <p className="h3">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
