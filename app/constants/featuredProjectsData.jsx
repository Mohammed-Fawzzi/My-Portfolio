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

export const featuredProjectsData = [
  {
    id: 1,
    image: "/fp1.webp",
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
    image: "/fp4.webp",
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
  //   image: "/fp6.webp",
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
    image: "/fp6.webp",
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
    image: "/fp2.webp",
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
