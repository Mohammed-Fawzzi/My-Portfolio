"use client";

import React from "react";
import Photo from "@/app/(Components)/hero/Photo";
import { motion } from "framer-motion";
import { FadeLeft } from "@/app/constants/animation";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const BackIcon = isRtl ? FaArrowAltCircleRight : FaArrowAltCircleLeft;

  return (
    <section className="h-full bg-primary text-white my-14">
      <div className="container mx-auto h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-14">
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>

          <div className="text-center xl:text-start order-2 xl:order-none">
            <motion.span
              variants={FadeLeft(0.3, isRtl)}
              initial="hidden"
              animate="visible"
              className="text-xl text-accent"
            >
              {t("code")}
            </motion.span>
            <motion.h1
              variants={FadeLeft(0.6, isRtl)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold my-4"
            >
              {t("title")}
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.9, isRtl)}
              initial="hidden"
              animate="visible"
              className="text-neutral-300 max-w-lg mb-6"
            >
              {t("description")}
            </motion.p>
            <motion.p
              variants={FadeLeft(1.2, isRtl)}
              initial="hidden"
              animate="visible"
              className="text-neutral-400 mb-9"
            >
              {t("hint")}
            </motion.p>
            <motion.div
              variants={FadeLeft(1.6, isRtl)}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/"
                className="flex items-center justify-center bg-accent text-on-accent font-bold px-6 py-2 rounded hover:bg-accent-dark transition"
              >
                <BackIcon className="me-2" />
                <span>{t("backHome")}</span>
              </Link>
            </motion.div>
            <motion.p
              variants={FadeLeft(1.9, isRtl)}
              initial="hidden"
              animate="visible"
              className="text-neutral-400 mt-4"
            >
              {t("needHelp")}{" "}
              <Link href="/contact" className="text-accent">
                {t("contactMe")}
              </Link>
              .
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
