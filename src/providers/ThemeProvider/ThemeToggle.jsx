"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("theme");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? t("switchToLight") : t("switchToDark")
      }
      className={`flex items-center justify-center rounded-full p-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 ${className}`}
    >
      {theme === "dark" ? (
        <MdLightMode className="text-lg md:text-2xl" />
      ) : (
        <MdDarkMode className="text-lg md:text-2xl" />
      )}
    </button>
  );
}
