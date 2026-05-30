import {
  FaMobileAlt,
  FaProjectDiagram,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdGTranslate } from "react-icons/md";
import { SiReactquery, SiReactrouter } from "react-icons/si";

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
  {
    id: 6,
    image: "/fp6.webp",
    languages: [
      FaReact,
      RiTailwindCssFill,
      FaProjectDiagram,
      FaMobileAlt,
    ],
    demo: "https://special-home-care.com/",
  },
];
