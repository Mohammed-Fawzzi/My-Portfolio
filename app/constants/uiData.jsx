import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaFontAwesome,
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
} from "react-icons/fa";

import ui1 from "@/app/assets/projects/web/ui/ui1.webp";
import ui2 from "@/app/assets/projects/web/ui/ui2.webp";
import ui3 from "@/app/assets/projects/web/ui/ui3.webp";
import ui4 from "@/app/assets/projects/web/ui/ui4.webp";

export const uiData = [
  {
    id: 1,
    image: ui1,
    languages: [FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaMobileAlt],
    demo: "https://tawkeele.com/",
    repo: "https://github.com/Mohammed-Fawzzi/Tawkeele",
  },
  {
    id: 2,
    image: ui2,
    languages: [FaHtml5, FaCss3, FaFontAwesome, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Hostit/",
    repo: "https://github.com/Mohammed-Fawzzi/Hostit",
  },
  {
    id: 3,
    image: ui3,
    languages: [FaHtml5, FaCss3, FaFontAwesome, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Mealify/",
    repo: "https://github.com/Mohammed-Fawzzi/Mealify",
  },
  {
    id: 4,
    image: ui4,
    languages: [FaHtml5, FaCss3, FaBootstrap, FaFontAwesome, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/DevFolio/",
    repo: "https://github.com/Mohammed-Fawzzi/DevFolio",
  },
];
