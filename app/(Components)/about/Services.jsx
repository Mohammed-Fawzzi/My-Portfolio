"use client";

import React from "react";
import { servicesData } from "@/app/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  return (
    <section className="py-8">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {t("title")}{" "}
            <span className="text-accent">{t("titleAccent")}</span>
          </h1>
        </div>
      </div>

      <div className="container my-10 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="flex flex-col items-center justify-start space-y-4
                shadow-lg p-5 border border-accent
                rounded-xl bg-primary min-h-[270px]"
            >
              <div className="border-2 border-accent rounded-xl w-20 h-20 cursor-pointer flex justify-center items-center hover:bg-accent transition-colors duration-300">
                <Image
                  src={service.icon}
                  width={50}
                  height={50}
                  alt={t(`items.${service.id}.title`)}
                  className="object-contain"
                />
              </div>

              <p className="text-xl font-bold text-center">
                {t(`items.${service.id}.title`)}
              </p>

              <p className="text-sm font-medium text-neutral-300 text-center leading-relaxed">
                {t(`items.${service.id}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
