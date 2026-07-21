"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "@/constants/animation";
import Skills from "./Skills";
import Services from "./Services";
import { aboutMe } from "@/constants";
import { useLocale, useTranslations } from "next-intl";

export default function AboutSection({ showExtras = true }) {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const getSide = (side) => {
    if (!isRtl) return side;
    return side === "left" ? "right" : "left";
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="h2 text-center">
            {t("title")} <span className="text-accent">{t("titleAccent")}</span>
          </div>

          <div className="container py-6 overflow-hidden">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-primary">
              {aboutMe.map((item, index) => {
                const side = getSide(item.side);

                return (
                  <div
                    key={index}
                    className={`flex ${
                      side === "left" ? "flex-row-reverse" : ""
                    } md:contents`}
                  >
                    {side === "left" && (
                      <motion.div
                        variants={FadeLeft(item.delay, isRtl)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-accent col-start-1 col-end-5 p-4 rounded-xl my-4 ms-auto shadow-md"
                      >
                        <h3 className="font-semibold text-2xl mb-1 flex gap-2 items-center">
                          {item.icon}{" "}
                          <span>{t(`items.${item.id}.title`)}</span>
                        </h3>
                        <p className="leading-tight font-semibold">
                          {t(`items.${item.id}.desc`)}
                        </p>
                      </motion.div>
                    )}

                    <div className="col-start-5 col-end-6 md:mx-auto relative me-10">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-accent pointer-events-none"></div>
                      </div>
                      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-accent shadow"></div>
                    </div>

                    {side === "right" && (
                      <motion.div
                        variants={FadeRight(item.delay, isRtl)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-accent col-start-6 col-end-10 p-4 rounded-xl my-4 me-auto shadow-md"
                      >
                        <h3 className="font-semibold text-2xl mb-1 flex gap-2 items-center">
                          {item.icon}{" "}
                          <span>{t(`items.${item.id}.title`)}</span>
                        </h3>
                        <p className="leading-tight font-semibold">
                          {t(`items.${item.id}.desc`)}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Skills />

      {showExtras && <Services />}
    </>
  );
}
