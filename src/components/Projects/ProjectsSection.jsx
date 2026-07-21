"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeRight, FadeUp } from "@/constants/animation";
import Ui from "./Ui";
import Js from "./Js";
import ReactAndNext from "./reactAndNext";
import Mobile from "./Mobile";
import { useLocale, useTranslations } from "next-intl";

function SectionTitle({ title, subtitle, isRtl }) {
  const accent = (
    <span className="text-accent inline-block" dir="ltr">
      {title}
    </span>
  );

  return (
    <motion.h1
      variants={FadeUp(0.3)}
      initial="hidden"
      animate="visible"
      className="text-xl font-bold"
    >
      {isRtl ? (
        <>
          <span>{subtitle}</span> {accent}
        </>
      ) : (
        <>
          {accent} <span>{subtitle}</span>
        </>
      )}
    </motion.h1>
  );
}

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
                <SectionTitle
                  title={t("reactNext.title")}
                  subtitle={t("reactNext.subtitle")}
                  isRtl={isRtl}
                />
              </motion.div>
              <ReactAndNext />

              <motion.div
                variants={FadeRight(0.3, isRtl)}
                initial="hidden"
                animate="visible"
                className="border-s-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
              >
                <SectionTitle
                  title={t("js.title")}
                  subtitle={t("js.subtitle")}
                  isRtl={isRtl}
                />
              </motion.div>
              <Js />

              {/* <motion.div
                variants={FadeRight(0.3, isRtl)}
                initial="hidden"
                animate="visible"
                className="border-s-4 border-accent p-3 rounded-t-lg rounded-b-lg my-4"
              >
                <SectionTitle
                  title={t("ui.title")}
                  subtitle={t("ui.subtitle")}
                  isRtl={isRtl}
                />
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
                <SectionTitle
                  title={t("mobile.title")}
                  subtitle={t("mobile.subtitle")}
                  isRtl={isRtl}
                />
              </motion.div>
              <Mobile />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
