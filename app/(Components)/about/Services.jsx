import React from "react";
import { servicesData } from "@/constants";
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

      {/* Services */}
      <div className="container my-10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-start space-y-4 shadow-lg p-5 border border-accent rounded-lg bg-primary min-h-[270px]"
            >
              <div className="border-2 border-accent rounded-sm w-20 h-20 cursor-pointer flex justify-center items-center hover:bg-accent transition-colors duration-300">
                <Image
                  src={service.icon}
                  width={50}
                  height={50}
                  alt={service.title}
                  className="object-contain"
                />
              </div>
              <p className="text-xl font-bold text-center">{service.title}</p>
              <p className="text-sm font-medium text-neutral-300 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
