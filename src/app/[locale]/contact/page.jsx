import Contact from "@/components/Contact/Contact";
import { setRequestLocale } from "next-intl/server";

export default function ContactPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <Contact />;
}
