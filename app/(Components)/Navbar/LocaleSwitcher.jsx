"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { MdGTranslate } from "react-icons/md";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("localeSwitcher");
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "ar" ? "en" : "ar";
  const targetLabel = t(nextLocale);

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      aria-label={t("switchTo", { language: targetLabel })}
      title={t("switchTo", { language: targetLabel })}
      className="group flex items-center justify-center gap-1.5 h-8 md:h-9 min-w-[2rem] md:min-w-0 px-2.5 md:px-3.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300"
    >
      <MdGTranslate className="text-lg md:text-xl shrink-0 transition-transform duration-300 group-hover:scale-110" />
      <span
        className={`hidden sm:inline text-xs md:text-sm font-bold whitespace-nowrap ${
          nextLocale === "ar" ? "font-arabic" : "font-latin"
        }`}
      >
        {targetLabel}
      </span>
    </button>
  );
}
