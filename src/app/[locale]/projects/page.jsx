import ProjectsSection from "@/components/Projects/ProjectsSection";
import { setRequestLocale } from "next-intl/server";

export default function ProjectsPage({ params: { locale } }) {
  setRequestLocale(locale);
  return <ProjectsSection />;
}
