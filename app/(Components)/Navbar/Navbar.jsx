"use client";

import { navItems } from "@/app/constants";
import { motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/app/providers/ThemeProvider/ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { useScrollProgress } from "@/app/hooks/useScrollProgress";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathName = usePathname();
  const navRef = useRef(null);
  const [barTop, setBarTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress(pathName);
  const progressWidth = Math.min(100, scrollProgress);

  useEffect(() => {
    const updateBarPosition = () => {
      if (!navRef.current) return;
      setBarTop(navRef.current.getBoundingClientRect().bottom);
    };

    updateBarPosition();
    window.addEventListener("scroll", updateBarPosition, { passive: true });
    window.addEventListener("resize", updateBarPosition);

    const observer = new ResizeObserver(updateBarPosition);
    if (navRef.current) observer.observe(navRef.current);

    return () => {
      window.removeEventListener("scroll", updateBarPosition);
      window.removeEventListener("resize", updateBarPosition);
      observer.disconnect();
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="sticky top-0 z-50 w-full bg-primary backdrop-blur-lg shadow-sm"
      >
        <div className="container mx-auto relative lg:text-sm md:px-1 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center flex-shrink-0 cursor-pointer">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold"
              >
                MF
                <span className="inline-block w-2 h-2 bg-accent rounded-full transform -translate-x-[5px] translate-y-[3px]" />
              </motion.h1>
            </Link>

            <ul className="hidden lg:flex items-center justify-center ms-14 gap-2">
              {navItems.map((link, index) => {
                const isActive = pathName === link.href;

                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link href={link.href} className="relative py-2 px-3 block">
                      {isActive && (
                        <motion.span
                          layoutId="navActive"
                          className="absolute inset-0 bg-accent rounded"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 font-bold transition-colors ${
                          isActive ? "text-on-accent" : "text-white hover:text-accent"
                        }`}
                      >
                        {t(link.key)}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}

              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.1 }}
              >
                <LocaleSwitcher />
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (navItems.length + 2) * 0.1 }}
              >
                <ThemeToggle />
              </motion.li>
            </ul>

            <div className="lg:hidden flex items-center gap-3">
              <LocaleSwitcher />
              <ThemeToggle />
              <button type="button" onClick={toggleMenu} aria-label={t("toggleMenu")}>
                {isMenuOpen ? (
                  <IoClose className="text-accent text-icons" />
                ) : (
                  <RiMenu3Line className="text-accent text-icons" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="fixed end-0 z-20 mt-3 w-full border-t border-b border-neutral-700/80 bg-primary pt-5 pb-10 flex flex-col justify-center items-center text-center lg:hidden">
              <ul className="pb-3">
                {navItems.map((link, index) => {
                  const isActive = pathName === link.href;

                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="py-1"
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className="relative py-2 px-4 block"
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobileNavActive"
                            className="absolute inset-0 bg-accent rounded-md"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span
                          className={`relative z-10 font-bold ${
                            isActive ? "text-on-accent" : "text-white hover:text-accent"
                          }`}
                        >
                          {t(link.key)}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </motion.nav>

      <div
        className="nav-scroll-track pointer-events-none fixed start-0 z-[60] h-[5px] overflow-hidden"
        style={{ top: barTop }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={t("scrollProgress")}
      >
        <div
          className="nav-scroll-progress h-full transition-[width] duration-150 ease-out will-change-[width]"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </>
  );
}
