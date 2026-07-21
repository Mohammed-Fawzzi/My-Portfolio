import Hero from "@/components/Hero/Hero";
import FreelanceProjects from "@/components/FreelanceProjects/FreelanceProjects";
import { setRequestLocale } from "next-intl/server";

export default function HomePage({ params: { locale } }) {
  setRequestLocale(locale);

  return (
    <div>
      <Hero />
      <FreelanceProjects />
    </div>
  );
}
