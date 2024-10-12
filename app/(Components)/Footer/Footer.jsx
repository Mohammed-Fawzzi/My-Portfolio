"use client";
import { socials } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-700/80 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer mb-4 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-bold"
            >
              MF
              <span className="inline-block w-2 h-2 bg-accent rounded-full transform translate-x-[-5px] translate-y-[3px]"></span>
            </motion.h1>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center space-x-4 mt-4 md:mt-0"
          >
            {socials.map((item, index) => (
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-accent text-accent hover:bg-accent-HOVER hover:text-primary rounded-full transition-all duration-500 text-icons">
                  {item.icon}
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
