import {
  FaBootstrap,
  FaChartPie,
  FaClipboardList,
  FaCss3,
  FaEnvelope,
  FaFontAwesome,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPaintBrush,
  FaPhoneAlt,
  FaProjectDiagram,
  FaReact,
  FaRocket,
  FaTelegramPlane,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiReactquery } from "react-icons/si";
import { HiBellAlert } from "react-icons/hi2";
import { SiReactrouter } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { LiaMousePointerSolid } from "react-icons/lia";
import { CiDark } from "react-icons/ci";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const socials = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/mohamed-fawzzi-72b962280/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "https://github.com/Mohammed-Fawzzi",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    url: "tel:+201021580334",
  },
  {
    id: 4,
    icon: <FaTelegramPlane />,
    url: "tel:+201552760491",
  },
];

export const states = [
  {
    num: 1,
    text: "Years of coding.",
  },
  {
    num: 30,
    text: "Projects Completing.",
  },
  {
    num: 8,
    text: "Technologies Mastered.",
  },
  {
    num: 15,
    text: "Frameworks and Libraries Used.",
  },
];

export const technicalSkills = [
  {
    id: 1,
    title: "Html",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    title: "Css",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    title: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    id: 4,
    title: "Javascript",
    icon: <FaJs />,
  },
  {
    id: 5,
    title: "Jquery",
    icon: <DiJqueryLogo />,
  },
  {
    id: 6,
    title: "Tailwind css",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 7,
    title: "React js",
    icon: <FaReact />,
  },
  {
    id: 8,
    title: "Next js",
    icon: <RiNextjsFill />,
  },
];

export const services = [
  {
    id: 1,
    title: "Web Application",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "API Integration",
    icon: <FaProjectDiagram />,
  },
  {
    id: 3,
    title: "User Interface",
    icon: <FaPaintBrush />,
  },
  {
    id: 4,
    title: "Responsive Designs",
    icon: <FaMobileAlt />,
  },
  {
    id: 5,
    title: "Speed Optimization",
    icon: <FaRocket />,
  },
  {
    id: 6,
    title: "Website Management",
    icon: <FaClipboardList />,
  },
];

export const servicesData = [
  {
    id: 1,
    icon: "/services/s1.webp",
    title: "Web Applications",
    description: "Tailored web apps built with the latest technologies.",
  },
  {
    id: 2,
    title: "API Integration",
    icon: "/services/s2.webp",
    description:
      "Seamless integration for smooth data sharing and functionality.",
  },
  {
    id: 3,
    title: "User Interfaces",
    icon: "/services/s3.webp",
    description:
      "Engaging, responsive front-end designs enhancing user interactions.",
  },
  {
    id: 4,
    title: "Responsive Designs",
    icon: "/services/s4.webp",
    description:
      "Adaptive designs that fit all screens, ensuring great user experiences.",
  },
  {
    id: 5,
    icon: "/services/s5.webp",
    title: "Speed Optimization",
    description: "Boost performance with faster load times and optimization.",
  },
  {
    id: 6,
    icon: "/services/s6.webp",
    title: "Website Management",
    description: "Easy content management systems with flexible controls.",
  },
];

export const featuredProjectsData = [
  {
    id: 1,
    image: "/fp1.webp",
    title: "SHOPIQ [ E-commerce ]",
    description:
      "SHOPIQ: is a comprehensive e-commerce platform that allows you to browse products, search for any item, and register accounts. The site uses a (real API).",
    languages: [
      <FaReact />,
      <FaBootstrap />,
      <SiReactquery />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/SHOPIQ/",
    repo: "https://github.com/Mohammed-Fawzzi/SHOPIQ",
  },
  {
    id: 2,
    image: "/fp2.webp",
    title: "Streamo",
    description:
      "Streamo: is a comprehensive movie site that allows you to watch movies and TV shows, search for any film or series, and register accounts. The site uses the (TMDB API).",
    languages: [
      <FaReact />,
      <FaBootstrap />,
      <FaProjectDiagram />,
      <SiReactquery />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Streamo/",
    repo: "https://github.com/Mohammed-Fawzzi/Streamo",
  },
  {
    id: 3,
    image: "/fp3.webp",
    title: "Fast Food TNC",
    description:
      "Fast Food TNC: is a comprehensive food site that allows you to explore a wide variety of fast food meals, search for any dish, and view detailed recipes and ingredients. The site uses (TheMealDB API).",
    languages: [
      <RiNextjsFill />,
      <FaReact />,
      <RiTailwindCssFill />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://fast-food-tnc.vercel.app/",
    repo: "https://github.com/Mohammed-Fawzzi/Fast-Food",
  },
  {
    id: 4,
    image: "/fp4.webp",
    title: "Game Reviews",
    description:
      "Game Reviews: a web application designed to help you explore and discover free-to-play games using the (Free-to-Play Games Database API).",
    languages: [
      <FaHtml5 />,
      <FaBootstrap />,
      <FaJs />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Game-Review/",
    repo: "https://github.com/Mohammed-Fawzzi/Game-Review",
  },
];

export const reactNextData = [
  {
    id: 1,
    image: "/projects/react-next/react1.webp",
    title: "Digital Marketing",
    description:
      "Digital Marketing: is a web application designed to help you explore effective digital marketing strategies and tools. This app provides a seamless and professionally designed user interface to ensure an exceptional user experience.",
    languages: [
      <FaReact />,
      <FaBootstrap />,
      <FaFontAwesome />,
      <SiReactrouter />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Digital-Marketing",
    repo: "https://github.com/Mohammed-Fawzzi/Digital-Marketing",
  },
  {
    id: 2,
    image: "/projects/react-next/react2.webp",
    title: "Head Phones",
    description:
      "Head Phones: is a web application designed to help you explore and choose the right headphones. This app provides an exceptional user experience with a professionally designed interface to ensure an exceptional user experience.",
    languages: [
      <FaReact />,
      <RiTailwindCssFill />,
      <TbBrandFramerMotion />,
      <LiaMousePointerSolid />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Head-Phones",
    repo: "https://github.com/Mohammed-Fawzzi/Head-Phones",
  },
  {
    id: 3,
    image: "/projects/react-next/react3.webp",
    title: "AdminPanelX",
    description:
      "AdminPanelX:  is a dynamic admin dashboard designed to efficiently manage data and monitor various metrics. This application provides a professional and user-friendly interface with the ability to switch between Dark and Light modes.",
    languages: [
      <FaReact />,
      <RiTailwindCssFill />,
      <CiDark />,
      <FaChartPie />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Admin-Dashboard/",
    repo: "https://github.com/Mohammed-Fawzzi/Admin-Dashboard",
  },
  {
    id: 4,
    image: "/projects/react-next/react4.webp",
    title: "Streamo",
    description:
      "Streamo: is a comprehensive movie site that allows you to watch movies and TV shows, search for any film or series, and register accounts. The site uses the (TMDB API), This application provides a professional and user-friendly interface.",
    languages: [
      <FaReact />,
      <FaBootstrap />,
      <FaProjectDiagram />,
      <SiReactquery />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Streamo/",
    repo: "https://github.com/Mohammed-Fawzzi/Streamo",
  },
  {
    id: 5,
    image: "/projects/react-next/react5.webp",
    title: "SHOPIQ [ E-commerce ]",
    description:
      "SHOPIQ: is a comprehensive e-commerce platform that allows you to browse products, search for any item, and register accounts. The site uses a (real API), This application provides a professional and user-friendly interface.",
    languages: [
      <FaReact />,
      <FaBootstrap />,
      <SiReactquery />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/SHOPIQ/",
    repo: "https://github.com/Mohammed-Fawzzi/SHOPIQ",
  },
  {
    id: 6,
    image: "/projects/react-next/next1.webp",
    title: "VirtualR",
    description:
      "VirtualR: is a comprehensive platform that allows you to design virtual reality applications with ease and professionalism. The system features a user-friendly interface with a variety of tools and features.",
    languages: [
      <RiNextjsFill />,
      <FaReact />,
      <RiTailwindCssFill />,
      <FaMobileAlt />,
    ],
    demo: "https://virtual-reality-mo.vercel.app/",
    repo: "https://github.com/Mohammed-Fawzzi/Virtual-Reality",
  },
  {
    id: 7,
    image: "/projects/react-next/next2.webp",
    title: "Fast Food TNC",
    description:
      "Fast Food TNC: is a comprehensive food site that allows you to explore a wide variety of fast food meals, search for any dish, and view detailed recipes and ingredients. The site uses (TheMealDB API).",
    languages: [
      <RiNextjsFill />,
      <FaReact />,
      <RiTailwindCssFill />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://fast-food-tnc.vercel.app/",
    repo: "https://github.com/Mohammed-Fawzzi/Fast-Food",
  },
  {
    id: 8,
    image: "/projects/react-next/next3.webp",
    title: "Bookify",
    description:
      "Bookify:  is a comprehensive site that allows you to explore a wide variety of books, search for any title, and view detailed information about each book. The site uses (The New York Times API).",
    languages: [
      <RiNextjsFill />,
      <FaReact />,
      <RiTailwindCssFill />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://bookify-finder.vercel.app/",
    repo: "https://github.com/Mohammed-Fawzzi/Bookify",
  },
];

export const jsData = [
  {
    id: 1,
    image: "/projects/js/js1.webp",
    title: "Product Management System [ CRUDS ]",
    description:
      "Product Management System: a web application designed to make managing products easy and efficient. This CRUD app (Create, Read, Update, Delete) allows you to seamlessly add, update, delete, and search for products.",
    languages: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      <HiBellAlert />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/CRUDS/",
    repo: "https://github.com/Mohammed-Fawzzi/CRUDS",
  },
  {
    id: 2,
    image: "/projects/js/js2.webp",
    title: "ToDo List",
    description:
      "ToDo List: a web application designed to make managing your tasks easy and efficient. This application allows you to seamlessly add and delete tasks with sweetalert, ensuring that you stay organized and productive.",
    languages: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaJs />,
      <HiBellAlert />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/To-Do/",
    repo: "https://github.com/Mohammed-Fawzzi/To-Do",
  },
  {
    id: 3,
    image: "/projects/js/quotes.webp",
    title: "Quotes of the Day",
    description:
      "Quotes of the Day: a web application designed to brighten your day with inspiring quotes. Fetching random quotes from the (QuotableAPI), this app lets you enjoy and share motivational wisdom effortlessly. ",
    languages: [
      <FaHtml5 />,
      <FaBootstrap />,
      <FaJs />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Quotes-of-Day/",
    repo: "https://github.com/Mohammed-Fawzzi/Quotes-of-Day",
  },
  {
    id: 4,
    image: "/projects/js/js4.webp",
    title: "Weather App",
    description:
      "Weather App: a web application designed to keep you informed about the latest weather conditions. Fetching data from the (WeatherAPI), this app lets you easily search for and view the weather forecast for any city or country for the next three days.",
    languages: [
      <FaHtml5 />,
      <FaBootstrap />,
      <FaJs />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Weather-App/",
    repo: "https://github.com/Mohammed-Fawzzi/Weather-App",
  },
  {
    id: 5,
    image: "/projects/js/game.webp",
    title: "Game Reviews",
    description:
      "Game Reviews: a web application designed to help you explore and discover free-to-play games using the (Free-to-Play Games Database API). and with Modules js and Object Oriented programming.",
    languages: [
      <FaHtml5 />,
      <FaBootstrap />,
      <FaJs />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Game-Review/",
    repo: "https://github.com/Mohammed-Fawzzi/Game-Review",
  },
  {
    id: 6,
    image: "/projects/js/js6.webp",
    title: "Egyptian Party",
    description:
      "Egyptian Party: a web application for an upcoming Egyptian party event. The website includes a side menu, a countdown feature for the event date, and a responsive design. It is built using HTML, CSS, Bootstrap, JavaScript, and jQuery.",
    languages: [
      <FaHtml5 />,
      <FaBootstrap />,
      <FaJs />,
      <SiReactquery />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Egyptian-Party/",
    repo: "https://github.com/Mohammed-Fawzzi/Egyptian-Party",
  },
  {
    id: 7,
    image: "/projects/js/js7.webp",
    title: "Quiz Master",
    description:
      "Quiz Master: Quiz Master is a web application designed to test your knowledge with a variety of trivia questions. It uses the Open (Trivia Database API) to provide engaging and interactive quizzes, and with Modules js and Object Oriented programming..",
    languages: [
      <FaHtml5 />,
      <FaBootstrap />,
      <FaJs />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Quiz-Master",
    repo: "https://github.com/Mohammed-Fawzzi/Quiz-Master",
  },
  {
    id: 8,
    image: "/projects/js/js8.webp",
    title: "Yummy",
    description:
      "Yummy: This is a simple recipe app designed to help you discover delicious recipes from various cuisines. Using (TheMealDB API), you can search for recipes, view details, and find inspiration for your next meal, and with Modules js and OOP.",
    languages: [
      <FaHtml5 />,
      <FaBootstrap />,
      <FaJs />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/Yummy",
    repo: "https://github.com/Mohammed-Fawzzi/Yummy",
  },
];

export const uiData = [
  {
    id: 1,
    image: "/projects/ui/ui1.webp",
    title: "Hostit",
    description:
      "Hostit:  Our platform offers user-friendly interfaces and robust hosting capabilities to ensure your websites run smoothly and efficiently.",
    languages: [<FaHtml5 />, <FaCss3 />, <FaFontAwesome />, <FaMobileAlt />],
    demo: "https://mohammed-fawzzi.github.io/Hostit/",
    repo: "https://github.com/Mohammed-Fawzzi/Hostit",
  },
  {
    id: 2,
    image: "/projects/ui/ui2.webp",
    title: "Mealify",
    description:
      "Mealify :  is a restaurant website , featuring user-friendly interfaces, a dark mode, and robust navigation capabilities to ensure your browsing experience is smooth and enjoyable.",
    languages: [<FaHtml5 />, <FaCss3 />, <FaFontAwesome />, <FaMobileAlt />],
    demo: "https://mohammed-fawzzi.github.io/Mealify/",
    repo: "https://github.com/Mohammed-Fawzzi/Mealify",
  },
  {
    id: 3,
    image: "/projects/ui/ui3.webp",
    title: "DevFolio",
    description:
      "DevFolio: a portfolio website that showcases the talents and projects of a full stack developer named Morgan Freeman. With a clean and user-friendly interface.",
    languages: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaBootstrap />,
      <FaFontAwesome />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/DevFolio/",
    repo: "https://github.com/Mohammed-Fawzzi/DevFolio",
  },
  {
    id: 4,
    image: "/projects/ui/ui4.webp",
    title: "UI-Registration",
    description:
      "UI-Registration: This is a web application designed to create and manage user registration forms,with a responsive design. with to pages signin & signup",
    languages: [
      <FaHtml5 />,
      <FaCss3 />,
      <FaBootstrap />,
      <FaFontAwesome />,
      <FaMobileAlt />,
    ],
    demo: "https://mohammed-fawzzi.github.io/UI-Registration/",
    repo: "https://github.com/Mohammed-Fawzzi/UI-Registration",
  },
];

export const contactData = [
  {
    id: 1,
    icon: <FaUser className="text-icons text-accent" />,
    text: "Mohamed Fawzzi Mohamed",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt className="text-icons text-accent" />,
    text: "Mansoura, Egypt",
  },
  {
    id: 3,
    icon: <FaPhoneAlt className="text-icons text-accent" />,
    text: "+201021580334",
  },
  {
    id: 4,
    icon: <FaEnvelope className="text-icons text-accent" />,
    text: "moahmedfawzzimohamed@gmail.com",
  },
];
