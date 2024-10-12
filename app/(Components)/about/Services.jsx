import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "@/constants";
import { FadeLeft, FadeUp } from "@/constants/animation";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-8">
      <div className="container">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            How can I <span className="text-accent">help?</span>
          </h1>
        </div>
      </div>
      {/* services */}
      <div className="container my-10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
          {servicesData.map((service, index) => (
            <motion.div
              variants={FadeUp(index * 0.1)}
              initial="hidden"
              whileInView={"visible"}
              key={service.id}
              className="flex flex-col items-center space-y-3 justify-center shadow-lg p-5 border border-accent cursor-pointer bg-primary"
            >
              <div className="border-2 border-accent rounded-xl w-24 h-24 flex justify-center items-center hover:bg-accent transition-colors duration-300">
                <Image
                  src={service.icon}
                  width={50}
                  height={50}
                  alt={service.title} 
                  className="object-contain w-auto h-auto" 
                />
              </div>
              <p className="text-xl mt-4 font-bold">{service.title}</p>
              <p className="text-md font-bold text-opacity-80 text-neutral-300 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
