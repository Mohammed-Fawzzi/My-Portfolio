"use client";

import { states } from "@/constants";
import React from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="pt-4 pb-12 mb-10 xl:pt-0 xl:pb-0">
      <div className="container mx-auto overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {states.map((state, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
            >
              <CountUp
                end={state.num}
                duration={3}
                delay={1}
                prefix="+"
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  t(state.key).length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-tight text-white/80`}
              >
                {t(state.key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
