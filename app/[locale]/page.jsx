import Hero from "@/app/(Components)/hero/Hero";
import FreelanceProjects from "@/app/(Components)/FreelanceProjects/FreelanceProjects";
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
