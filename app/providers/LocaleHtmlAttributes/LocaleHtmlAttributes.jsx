"use client";

import { useEffect } from "react";
import { localeDirections } from "@/i18n/routing";

export default function LocaleHtmlAttributes({ locale }) {
  useEffect(() => {
    const dir = localeDirections[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.className = locale === "ar" ? "font-arabic" : "font-latin";
  }, [locale]);

  return null;
}
