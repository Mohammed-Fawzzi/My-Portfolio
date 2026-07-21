"use client";

import { mobileData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FadeUp } from "@/constants/animation";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function Mobile() {
  const t = useTranslations("projects.mobile");
  const tc = useTranslations("common");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-8 overflow-hidden">
      {mobileData.map((project, index) => (
        <motion.div
          variants={FadeUp(index * 0.1)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          key={project.id}
          className="shadow-lg border border-neutral-700/60 relative group flex flex-col rounded-xl"
        >
          <div className="relative h-80">
            <Image
              src={project.image}
              fill={true}
              alt={t(`items.${project.id}.title`)}
              className="rounded-t-xl object-fill w-full"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-t-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold bg-accent hover:bg-accent-HOVER text-on-accent p-2 mx-2 flex gap-1 justify-center items-center rounded-md"
                >
                  <span>{tc("live")}</span> <FiExternalLink />
                </Link>
              )}
              {project.repo && (
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold bg-accent hover:bg-accent-HOVER text-on-accent p-2 mx-2 flex gap-1 justify-center rounded-md items-center"
                >
                  <span>{tc("code")}</span> <FaGithub />
                </Link>
              )}
            </div>
          </div>

          <div className="p-5 flex flex-col flex-grow justify-between">
            <div>
              <h2 className="text-xl font-semibold text-accent">
                {t(`items.${project.id}.title`)}
              </h2>
              <p className="text-neutral-300 my-5">
                {t(`items.${project.id}.description`)}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.languages.map((Icon, langIndex) => (
                <span
                  key={langIndex}
                  className="text-3xl border-2 border-accent rounded-md p-2 cursor-pointer hover:bg-accent hover:text-primary transition-colors duration-300"
                >
                  <Icon />
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
