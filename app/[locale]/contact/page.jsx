import Contact from "@/app/(Components)/contact/Contact";
import { setRequestLocale } from "next-intl/server";

export default function ContactPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <Contact />;
}
