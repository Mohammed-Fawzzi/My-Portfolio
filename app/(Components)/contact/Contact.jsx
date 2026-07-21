"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "@/app/constants/animation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="h-full">
      <div className="container mx-auto py-8 overflow-x-hidden px-4">
        <div className="h2 text-center mb-10">
          {t("title")} <span className="text-accent">{t("titleAccent")}</span>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-14">
          <div className="w-full xl:w-1/2 flex justify-center">
            <Image
              src="/avatar.webp"
              alt="avatar"
              width={500}
              height={500}
              className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
              priority
            />
          </div>

          <div className="flex flex-col space-y-7 mb-4 rounded-lg p-4 w-full xl:w-1/2">
            <div className="space-y-2">
              <motion.div
                variants={FadeRight(0.3, isRtl)}
                initial="hidden"
                animate="visible"
                className="w-fit border-s-4 border-accent p-3 rounded-lg shadow-lg"
              >
                <motion.h1
                  variants={FadeUp(0.3)}
                  initial="hidden"
                  animate="visible"
                  className="text-3xl font-bold"
                >
                  {t("talkTitle")}{" "}
                  <span className="text-accent">{t("talkAccent")}</span>
                </motion.h1>
              </motion.div>

              <motion.p
                variants={FadeUp(0.6)}
                initial="hidden"
                animate="visible"
                className="text-neutral-300"
              >
                {t("description")}
              </motion.p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
