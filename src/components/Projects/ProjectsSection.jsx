"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeRight, FadeUp } from "@/constants/animation";
import Ui from "./Ui";
import Js from "./Js";
import ReactAndNext from "./reactAndNext";
import Mobile from "./Mobile";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { key: "web", labelKey: "web" },
    { key: "mobile", labelKey: "mobile" },
  ];

  return (
    <section className="py-5">
      <div className="container overflow-hidden">
        <div className="h2 text-center">
          {t("title")}{" "}
          {t("titleAccent") && (
            <span className="text-accent">{t("titleAccent")}</span>
          )}
        </div>

        <div className="my-8 flex justify-center">
          <div className="inline-flex gap-2 p-1 rounded-lg border border-neutral-700/60">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`
                  min-w-[140px] sm:min-w-[160px]
                  min-h-[40px] px-4
                  rounded-md text-sm font-bold
                  transition-colors duration-300
                  ${
                    activeTab === tab.key
                      ? "bg-accent text-on-accent"
                      : "text-neutral-400 hover:text-neutral-100"
                  }
                `}
              >
                {t(`tabs.${tab.labelKey}`)}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "web" ? (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
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

              {/* <motion.div
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
              <Ui /> */}
            </motion.div>
          ) : (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
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
                  <span className="text-accent">{t("mobile.title")} </span>
                  {t("mobile.subtitle")}
                </motion.h1>
              </motion.div>
              <Mobile />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
