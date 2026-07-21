"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "@/app/constants/animation";
import Ui from "./Ui";
import Js from "./Js";
import ReactAndNext from "./reactAndNext";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="py-5">
      <div className="container overflow-hidden">
        <div className="h2 text-center">
          {t("title")}{" "}
          {t("titleAccent") && (
            <span className="text-accent">{t("titleAccent")}</span>
          )}
        </div>

        <motion.div
          variants={FadeRight(0.3, isRtl)}
          initial="hidden"
          animate="visible"
          className="border-s-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
        >
          <motion.h1
            variants={FadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold"
          >
            <span className="text-accent">{t("reactNext.title")} </span>
            {t("reactNext.subtitle")}
          </motion.h1>
        </motion.div>
        <ReactAndNext />

        <motion.div
          variants={FadeRight(0.3, isRtl)}
          initial="hidden"
          animate="visible"
          className="border-s-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
        >
          <motion.h1
            variants={FadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold"
          >
            <span className="text-accent">{t("js.title")} </span>
            {t("js.subtitle")}
          </motion.h1>
        </motion.div>
        <Js />

        <motion.div
          variants={FadeRight(0.3, isRtl)}
          initial="hidden"
          animate="visible"
          className="border-s-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
        >
          <motion.h1
            variants={FadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold"
          >
            <span className="text-accent">{t("ui.title")} </span>
            {t("ui.subtitle")}
          </motion.h1>
        </motion.div>
        {/* <Ui /> */}
      </div>
    </section>
  );
}
