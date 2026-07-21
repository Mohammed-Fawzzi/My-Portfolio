import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import ClientProviders from "@/providers/ClientProviders/ClientProviders";
import { localeDirections, routing } from "@/i18n/routing";
import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL("https://mohamedfawzzi.site/"),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    icons: {
      icon: "/icon.jpg",
      apple: "/icon.jpg",
    },
    verification: {
      google: "_Tk8vv4akHbggsv9NyKCrovO1bogCAtsUUqTA1mYFdk",
    },
    keywords: [
      "Mohamed Fawzzi",
      "Front-End Developer",
      "React Developer",
      "Next.js Developer",
      "JavaScript",
      "TypeScript",
      "Web Developer Portfolio",
    ],
    authors: [{ name: "Mohamed Fawzzi" }],
    creator: "Mohamed Fawzzi",
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: "/",
      siteName: t("siteName"),
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
      images: [
        { url: "/icon.jpg", width: 1200, height: 630, alt: t("siteName") },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("twitterDescription"),
      images: ["/icon.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const themeScript = `
  (function () {
    try {
      var t = localStorage.getItem("theme");
      document.documentElement.classList.add(t === "light" ? "light" : "dark");
    } catch (e) {
      document.documentElement.classList.add("dark");
    }
  })();
`;

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = localeDirections[locale];
  const fontClass = locale === "ar" ? "font-arabic" : "font-latin";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={fontClass} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>{children}</ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
