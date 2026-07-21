import {
  FaMobileAlt,
  FaProjectDiagram,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { MdGTranslate } from "react-icons/md";
import {
  SiFirebase,
  SiFramer,
  SiReactquery,
  SiReactrouter,
  SiResend,
} from "react-icons/si";

import fp1 from "@/assets/projects/web/freelance/fp1.webp";
import fp2 from "@/assets/projects/web/freelance/fp2.webp";
import fp4 from "@/assets/projects/web/freelance/fp4.webp";
import fp6 from "@/assets/projects/web/freelance/fp6.webp";

export const featuredProjectsData = [
  {
    id: 1,
    image: fp1,
    languages: [
      FaReact,
      RiTailwindCssFill,
      SiReactquery,
      MdGTranslate,
      FaProjectDiagram,
    ],
    demo: "https://ma3aak.com/",
  },
  {
    id: 4,
    image: fp4,
    languages: [
      FaReact,
      RiTailwindCssFill,
      FaProjectDiagram,
      FaMobileAlt,
    ],
    demo: "https://dababat.com/",
  },
  // Special Home Care – Home Healthcare Platform
  // {
  //   id: 6,
  //   image: fp6,
  //   languages: [
  //     FaReact,
  //     RiTailwindCssFill,
  //     FaProjectDiagram,
  //     FaMobileAlt,
  //   ],
  //   demo: "https://special-home-care.com/",
  // },
  {
    id: 6,
    image: fp6,
    languages: [
      FaReact,
      RiNextjsFill,
      MdGTranslate,
      SiFramer,
      SiFirebase,
      SiResend,
    ],
    demo: "https://www.wafrahub.com/ar",
  },
  {
    id: 2,
    image: fp2,
    languages: [
      FaReact,
      RiTailwindCssFill,
      SiReactrouter,
      SiReactquery,
      MdGTranslate,
    ],
    demo: "https://clickatads.com/",
  },
];
