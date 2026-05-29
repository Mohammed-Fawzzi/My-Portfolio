"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 ${className}`}
    >
      {theme === "dark" ? (
        <MdLightMode className="text-xl md:text-2xl" />
      ) : (
        <MdDarkMode className="text-xl md:text-2xl" />
      )}
    </button>
  );
}
