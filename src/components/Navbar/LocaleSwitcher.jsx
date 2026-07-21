"use client";

import { createPortal } from "react-dom";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { MdExpandMore } from "react-icons/md";
import { routing } from "@/i18n/routing";

const localeShort = {
  en: "EN",
  ar: "ع",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("localeSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const updateMenuPosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const width = Math.max(rect.width, 148);
    let left = rect.left;
    left = Math.min(left, window.innerWidth - width);
    left = Math.max(left, 0);
    setMenuPosition({
      top: rect.bottom + 8,
      left,
      width,
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!isOpen) {
      setMenuPosition(null);
      return;
    }
    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);
    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [isOpen, updateMenuPosition]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        buttonRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setIsOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (nextLocale) => {
    if (nextLocale !== locale) {
      router.replace(pathname, { locale: nextLocale });
    }
    setIsOpen(false);
  };

  const currentShort = localeShort[locale];

  const dropdown =
    isOpen &&
    menuPosition &&
    mounted &&
    createPortal(
      <ul
        ref={menuRef}
        role="listbox"
        aria-label={t("label")}
        style={{
          position: "fixed",
          top: menuPosition.top,
          left: menuPosition.left,
          minWidth: menuPosition.width,
          zIndex: 9999,
        }}
        className="m-0 list-none overflow-hidden rounded-lg border border-accent bg-[rgb(var(--background))] shadow-[0_12px_32px_rgb(0_0_0/0.55)]"
      >
        {routing.locales.map((code, index) => {
          const isActive = code === locale;
          const isFirst = index === 0;
          const isLast = index === routing.locales.length - 1;
          const innerRound =
            isFirst && isLast
              ? "rounded-lg"
              : isFirst
                ? "rounded-t-lg rounded-b-none"
                : isLast
                  ? "rounded-b-lg rounded-t-none"
                  : "rounded-none";
          return (
            <li key={code} role="option" aria-selected={isActive}>
              <button
                type="button"
                onClick={() => handleSelect(code)}
                className={`w-full px-4 py-2.5 text-start text-sm font-semibold transition-colors ${innerRound} ${
                  code === "ar" ? "font-arabic" : "font-latin"
                } ${
                  isActive
                    ? "bg-accent text-on-accent"
                    : "text-white hover:bg-accent/15 hover:text-accent"
                }`}
              >
                {t(code)}
              </button>
            </li>
          );
        })}
      </ul>,
      document.body
    );

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t("switchTo", { language: t(locale) })}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title={t("switchTo", { language: t(locale) })}
        className="group inline-flex shrink-0 grow-0 items-center justify-center gap-1 h-9 min-h-9 max-h-9 min-w-9 px-3 leading-none rounded-full border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
      >
        <span
          className={`text-sm font-bold whitespace-nowrap leading-none ${
            locale === "ar" ? "font-arabic" : "font-latin"
          }`}
        >
          {currentShort}
        </span>
        <MdExpandMore
          className={`text-base shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {dropdown}
    </div>
  );
}
