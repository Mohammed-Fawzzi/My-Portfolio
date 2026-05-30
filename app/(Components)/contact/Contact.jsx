"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "@/app/constants/animation";
import { contactData } from "@/app/constants";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-toastify";

export default function Contact() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(tc("copied"));
  };

  const getDisplayText = (item) => {
    if (item.key) return t(item.key);
    return item.text;
  };

  return (
    <section className="h-full">
      <div className="container mx-auto py-8 overflow-hidden px-4">
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
                className="border-s-4 border-accent p-3 rounded-lg shadow-lg"
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

            {contactData.map((item) => (
              <motion.div
                key={item.id}
                variants={FadeLeft(0.9 + item.id * 0.3, isRtl)}
                initial="hidden"
                animate="visible"
                className="flex items-center w-full gap-3"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="w-[52px] h-[52px] flex justify-center items-center bg-[#27272c] shadow-xl shrink-0">
                    {item.icon}
                  </div>

                  <span
                    onClick={() =>
                      item.link
                        ? window.open(item.link, "_blank")
                        : handleCopy(getDisplayText(item))
                    }
                    className="
                      flex-1 text-center
                      text-xs md:text-[16px]
                      border font-bold
                      border-accent text-accent
                      cursor-pointer
                      hover:bg-accent-HOVER hover:text-primary
                      transition-all duration-300
                      p-[16px] w-fit
                    "
                  >
                    {getDisplayText(item)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
