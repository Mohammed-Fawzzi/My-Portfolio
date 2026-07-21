import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill, RiStackLine, RiTailwindCssFill } from "react-icons/ri";
import Image from "next/image";
import {
  SiAxios,
  SiCypress,
  SiFigma,
  SiFramer,
  SiJest,
  SiMui,
  SiPostman,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";

import apidog from "@/app/assets/skills/apidog.svg";

export const skillsData = {
  // Languages & Markup
  languages: [
    { id: 1, title: "HTML5", icon: <FaHtml5 /> },
    { id: 2, title: "CSS3", icon: <FaCss3 /> },
    { id: 3, title: "JavaScript (ES6+)", icon: <FaJs /> },
    { id: 4, title: "TypeScript", icon: <SiTypescript /> },
  ],

  // Frameworks
  frameworks: [
    { id: 5, title: "React.js", icon: <FaReact /> },
    { id: 6, title: "Next.js", icon: <RiNextjsFill /> },
    { id: 7, title: "React Native", icon: <TbBrandReactNative /> },
  ],

  // State Management
  stateManagement: [
    { id: 8, title: "Context API", icon: <FaReact /> },
    { id: 9, title: "React Query", icon: <SiReactquery /> },
    { id: 10, title: "Redux Toolkit", icon: <SiRedux /> },
    { id: 11, title: "Zustand", icon: <RiStackLine /> },
  ],

  // Styling & Animation
  styling: [
    { id: 12, title: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { id: 13, title: "Bootstrap", icon: <FaBootstrap /> },
    { id: 14, title: "Material UI (MUI)", icon: <SiMui /> },
    { id: 15, title: "shadcn/ui", icon: <SiShadcnui /> },
    { id: 16, title: "Framer Motion", icon: <SiFramer /> },
  ],

  // APIs & Integration
  api: [
    { id: 17, title: "RESTful APIs", icon: <TbApi /> },
    { id: 18, title: "Axios", icon: <SiAxios /> },
    { id: 19, title: "WebSocket (Socket.IO)", icon: <SiSocketdotio /> },
    { id: 20, title: "Postman", icon: <SiPostman /> },
    {
      id: 21,
      title: "Apidog",
      icon: (
        <Image
          src={apidog}
          alt="Apidog"
          width={48}
          height={48}
          className="object-contain"
        />
      ),
    },
  ],

  // Testing
  testing: [
    { id: 22, title: "Jest", icon: <SiJest /> },
    { id: 23, title: "Cypress (E2E)", icon: <SiCypress /> },
    { id: 24, title: "React Testing Library", icon: <SiTestinglibrary /> },
  ],

  // Version Control & Tools
  tools: [
    { id: 25, title: "Git", icon: <FaGitAlt /> },
    { id: 26, title: "GitHub", icon: <FaGithub /> },
    { id: 27, title: "Figma", icon: <SiFigma /> },
  ],
};
