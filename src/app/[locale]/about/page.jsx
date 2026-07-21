import AboutSection from "@/components/About/AboutSection";
import { setRequestLocale } from "next-intl/server";

export default function AboutPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <AboutSection showExtras={true} />;
}
