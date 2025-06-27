"use client";
import { navItems } from "@/constants";
import { motion } from "framer-motion";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  let pathName = usePathname();

  // Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="sticky top-0 z-50 bg-primary backdrop-blur-lg shadow-sm py-3 flex"
    >
      <div className="container mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 cursor-pointer">
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
          <ul className="hidden lg:flex items-center justify-center ml-14 space-x-5">
            {navItems.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-white hover:text-accent"
              >
                <Link
                  href={link.href}
                  className={`py-2 px-4 ${
                    pathName === link.href
                      ? "bg-accent text-primary font-bold"
                      : ""
                  }
                    `}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            >
              <Link
                href="mailto:mohamedfawzzimohamed@gmail.com"
                className="py-2 px-4 font-bold bg-accent text-primary rounded-full"
              >
                Hire Me
              </Link>
            </motion.li>
          </ul>
          {/* Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoClose className="text-accent text-icons" />
              ) : (
                <RiMenu3Line className="text-accent text-icons" />
              )}
            </button>
          </div>
        </div>

        {/* Menu */}
        {isMenuOpen && (
          <div className="fixed right-0 z-20 mt-3 w-full border-t border-b border-neutral-700/80 bg-primary pt-5 pb-10 flex flex-col justify-center items-center text-center lg:hidden">
            <ul className="pb-5">
              {navItems.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-4 hover:text-accent-HOVER"
                >
                  <Link
                    href={link.href}
                    className={`py-2 px-4 ${
                      pathName === link.href
                        ? "bg-accent text-primary font-bold"
                        : ""
                    }
                    `}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="mt-3"
              >
                <Link
                  href="mailto:mohamedfawzzimohamed@gmail.com"
                  className="py-2 px-4 font-bold bg-accent hover:bg-accent-HOVER text-primary rounded-full"
                >
                  Hire Me
                </Link>
              </motion.li>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
