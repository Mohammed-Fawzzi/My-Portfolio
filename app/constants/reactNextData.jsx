import {
  FaBootstrap,
  FaChartPie,
  FaFontAwesome,
  FaMobileAlt,
  FaProjectDiagram,
  FaReact,
} from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { LiaMousePointerSolid } from "react-icons/lia";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiReactquery, SiReactrouter } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import react5 from "@/app/assets/projects/web/react-next/react5.webp";
import react4 from "@/app/assets/projects/web/react-next/react4.webp";
import react3 from "@/app/assets/projects/web/react-next/react3.webp";
import react1 from "@/app/assets/projects/web/react-next/react1.webp";
import react2 from "@/app/assets/projects/web/react-next/react2.webp";
import next1 from "@/app/assets/projects/web/react-next/next1.webp";
import next3 from "@/app/assets/projects/web/react-next/next3.webp";
import next2 from "@/app/assets/projects/web/react-next/next2.webp";

export const reactNextData = [
  {
    id: 1,
    image: react5,
    languages: [FaReact, FaBootstrap, SiReactquery, FaProjectDiagram, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/SHOPIQ/",
    repo: "https://github.com/Mohammed-Fawzzi/SHOPIQ",
  },
  {
    id: 2,
    image: react4,
    languages: [FaReact, FaBootstrap, FaProjectDiagram, SiReactquery, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Streamo/",
    repo: "https://github.com/Mohammed-Fawzzi/Streamo",
  },
  {
    id: 3,
    image: react3,
    languages: [FaReact, RiTailwindCssFill, CiDark, FaChartPie, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Admin-Dashboard/",
    repo: "https://github.com/Mohammed-Fawzzi/Admin-Dashboard",
  },
  {
    id: 4,
    image: react1,
    languages: [FaReact, FaBootstrap, FaFontAwesome, SiReactrouter, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Digital-Marketing",
    repo: "https://github.com/Mohammed-Fawzzi/Digital-Marketing",
  },
  {
    id: 5,
    image: react2,
    languages: [FaReact, RiTailwindCssFill, TbBrandFramerMotion, LiaMousePointerSolid, FaMobileAlt],
    demo: "https://mohammed-fawzzi.github.io/Head-Phones",
    repo: "https://github.com/Mohammed-Fawzzi/Head-Phones",
  },
  {
    id: 6,
    image: next1,
    languages: [RiNextjsFill, FaReact, RiTailwindCssFill, FaMobileAlt],
    demo: "https://virtual-reality-mo.vercel.app/",
    repo: "https://github.com/Mohammed-Fawzzi/Virtual-Reality",
  },
  {
    id: 7,
    image: next3,
    languages: [RiNextjsFill, FaReact, RiTailwindCssFill, FaProjectDiagram, FaMobileAlt],
    demo: "https://bookify-finder.vercel.app/",
    repo: "https://github.com/Mohammed-Fawzzi/Bookify",
  },
  {
    id: 8,
    image: next2,
    languages: [RiNextjsFill, FaReact, RiTailwindCssFill, FaProjectDiagram, FaMobileAlt],
    demo: "https://fast-food-tnc.vercel.app/",
    repo: "https://github.com/Mohammed-Fawzzi/Fast-Food",
  },
];
