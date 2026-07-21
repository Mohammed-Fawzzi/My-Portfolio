"use client";

import { socials } from "@/app/constants";
import { Link } from "@/i18n/navigation";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Stats from "./Stats";
import { motion } from "framer-motion";
import { FadeRight } from "@/app/constants/animation";
import Image from "next/image";
import AboutSection from "../about/AboutSection";
import { useLocale, useTranslations } from "next-intl";
import cvFile from "@/app/assets/resume/MohamedFawzziCV.pdf";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-start order-2 xl:order-none">
            <motion.h1
              variants={FadeRight(0.9, isRtl)}
              initial="hidden"
              animate="visible"
              className="h2 mb-6"
            >
              {t("greeting")} <br />
              <motion.span
                variants={FadeRight(1.2, isRtl)}
                initial="hidden"
                animate="visible"
                className="text-accent"
              >
                {t("name")}
              </motion.span>
            </motion.h1>
            <motion.p
              variants={FadeRight(1.6, isRtl)}
              initial="hidden"
              animate="visible"
              className="text-neutral-300 max-w-[500px] mb-6"
            >
              {t("bio")}
            </motion.p>
            <motion.div
              variants={FadeRight(1.8, isRtl)}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center md:flex-row md:gap-4"
            >
              <a
                href={cvFile}
                download="MohamedFawzziCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-bold border border-accent text-accent hover:bg-accent-HOVER hover:text-primary py-2 px-5 rounded-full transition-all duration-300 flex items-center justify-center">
                  <span>{t("downloadCv")}</span>{" "}
                  <FiDownload className="ms-2 text-icons" />
                </button>
              </a>
              <div className="flex justify-center items-center gap-4 md:gap-3 mt-4 md:mt-0">
                {socials.map((item) => (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                  >
                    <div className="flex items-center justify-center w-12 h-12 border border-accent text-accent hover:bg-accent-HOVER hover:text-primary rounded-full transition-all duration-300 text-icons mb-8 xl:mb-0">
                      {item.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="order-1 xl:order-none mb-12">
            <Image
              src={"/avatar.webp"}
              alt="avatar"
              className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <Stats />

      <AboutSection showExtras={false} />
    </section>
  );
}
