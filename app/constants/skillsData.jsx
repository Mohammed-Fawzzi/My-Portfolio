import {
  FaBootstrap,
  FaChrome,
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
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

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
    { id: 17, title: "RESTful APIs", icon: <SiPostman /> },
    { id: 18, title: "WebSocket (Socket.io)", icon: <SiSocketdotio /> },
    {
      id: 19,
      title: "ApiDog",
      icon: (
        <Image
          src="/skills/apidog.svg"
          alt="ApiDog"
          width={48}
          height={48}
          className="object-contain"
        />
      ),
    },
    { id: 20, title: "Postman", icon: <SiPostman /> },
  ],

  // Testing
  testing: [
    { id: 21, title: "Jest", icon: <SiJest /> },
    { id: 22, title: "Cypress (E2E)", icon: <SiCypress /> },
  ],

  // Version Control & Tools
  tools: [
    { id: 23, title: "Git", icon: <FaGitAlt /> },
    { id: 24, title: "GitHub", icon: <FaGithub /> },
    { id: 25, title: "Figma", icon: <SiFigma /> },
    // { id: 24, title: "Chrome DevTools", icon: <FaChrome /> },
    // { id: 26, title: "VS Code", icon: <SiVisualstudiocode /> },
  ],
};
