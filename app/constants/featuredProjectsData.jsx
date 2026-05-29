import {
  FaCcStripe,
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
    title: "Ma3aak – Teacher Marketing Platform",
    description:
      "Built and maintained the frontend of a multi-service teacher marketplace using Next.js. Integrated PayPal payment flows including checkout and transaction status handling. Implemented advanced search and filtering for services and listings. Developed an Admin Dashboard using React to manage platform content and operations.",
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
    title: "Clickat Ads – Marketing & Advertising Platform",
    description:
      "Developed a multi-language marketing and advertising platform with dark and light modes. Integrated PayPal and direct payment links for advertising campaign requests. Built service modules for website creation and social media account management.",
    languages: [
      FaReact,
      RiTailwindCssFill,
      SiReactrouter,
      SiReactquery,
      MdGTranslate,
    ],
    demo: "https://clickatads.com/",
  },
  // {
  //   id: 3,
  //   image: "/fp3.webp",
  //   title: "E4Traders – Trading Education Platform",
  //   description:
  //     "A secure education platform delivering encrypted video-based courses with watermark protection, Google login, and progressive content unlocking. Features Stripe payment, admin dashboard, and smooth user navigation.",
  //   languages: [
  //     FaReact,
  //     RiTailwindCssFill,
  //     FaCcStripe,
  //     FaProjectDiagram,
  //     FaMobileAlt,
  //   ],
  //   demo: "https://e4traders.com/invite?ref=X5W94HDLE",
  // },
  {
    id: 4,
    image: "/fp4.webp",
    title: "Dababat – Motorcycle Marketplace Platform",
    description:
      "Developed a motorcycle marketplace platform supporting user authentication, ad and service management, and real-time chat between users. Implemented Google login, role-based access control, and an Admin Dashboard for managing users, ads, and analytics.",
    languages: [
      FaReact,
      RiTailwindCssFill,
      FaProjectDiagram,
      FaMobileAlt,
    ],
    demo: "https://dababat.com/",
  },
  // {
  //   id: 5,
  //   image: "/fp5.webp",
  //   title: "Waqt Al Sayana – Car Maintenance Platform",
  //   description:
  //     "Developed a car maintenance reminder platform that tracks upcoming service needs such as oil changes, filters, batteries, and tires. Implemented user profiles, service history tracking, automated reminders, payment integration, and an Admin Dashboard.",
  //   languages: [
  //     FaReact,
  //     RiTailwindCssFill,
  //     FaProjectDiagram,
  //     FaMobileAlt,
  //   ],
  //   demo: "https://waqtalsayana.com/",
  // },
  {
    id: 6,
    image: "/fp6.webp",
    title: "Special Home Care – Home Healthcare Services Platform",
    description:
      "Developed a platform for requesting home nursing and healthcare services with ease. Users can book services directly from their phones and receive professional healthcare support at home with safety and convenience in mind.",
    languages: [
      FaReact,
      RiTailwindCssFill,
      FaProjectDiagram,
      FaMobileAlt,
    ],
    demo: "https://special-home-care.com/",
  },
];
