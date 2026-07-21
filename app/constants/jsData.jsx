import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaMobileAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { SiReactquery } from "react-icons/si";

import js1 from "@/app/assets/projects/web/js/js1.webp";
import js2 from "@/app/assets/projects/web/js/js2.webp";
import quotes from "@/app/assets/projects/web/js/quotes.webp";
import js4 from "@/app/assets/projects/web/js/js4.webp";
import game from "@/app/assets/projects/web/js/game.webp";
import js6 from "@/app/assets/projects/web/js/js6.webp";
import js7 from "@/app/assets/projects/web/js/js7.webp";
import js8 from "@/app/assets/projects/web/js/js8.webp";

export const jsData = [
  {
    id: 1,
    image: js1,
    languages: [FaHtml5, FaCss3, FaJs, HiBellAlert, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/CRUDS/",
    repo: "https://github.com/Mohammed-Fawzzi/CRUDS",
  },
  {
    id: 2,
    image: js2,
    languages: [FaHtml5, FaCss3, FaJs, HiBellAlert, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/To-Do/",
    repo: "https://github.com/Mohammed-Fawzzi/To-Do",
  },
  {
    id: 3,
    image: quotes,
    languages: [FaHtml5, FaBootstrap, FaJs, FaProjectDiagram, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Quotes-of-Day/",
    repo: "https://github.com/Mohammed-Fawzzi/Quotes-of-Day",
  },
  {
    id: 4,
    image: js4,
    languages: [FaHtml5, FaBootstrap, FaJs, FaProjectDiagram, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Weather-App/",
    repo: "https://github.com/Mohammed-Fawzzi/Weather-App",
  },
  {
    id: 5,
    image: game,
    languages: [FaHtml5, FaBootstrap, FaJs, FaProjectDiagram, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Game-Review/",
    repo: "https://github.com/Mohammed-Fawzzi/Game-Review",
  },
  {
    id: 6,
    image: js6,
    languages: [FaHtml5, FaBootstrap, FaJs, SiReactquery, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Egyptian-Party/",
    repo: "https://github.com/Mohammed-Fawzzi/Egyptian-Party",
  },
  {
    id: 7,
    image: js7,
    languages: [FaHtml5, FaBootstrap, FaJs, FaProjectDiagram, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Quiz-Master",
    repo: "https://github.com/Mohammed-Fawzzi/Quiz-Master",
  },
  {
    id: 8,
    image: js8,
    languages: [FaHtml5, FaBootstrap, FaJs, FaProjectDiagram, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Yummy",
    repo: "https://github.com/Mohammed-Fawzzi/Yummy",
  },
];
