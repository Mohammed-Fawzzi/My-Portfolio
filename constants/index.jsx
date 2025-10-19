import {
  FaBootstrap,
  FaCcStripe,
  FaChartPie,
  FaClipboardList,
  FaCss3,
  FaCss3Alt,
  FaEnvelope,
  FaFontAwesome,
  FaGithub,
  FaGlobe,
  FaHtml5,
  FaJs,
  FaJsSquare,
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
import { SiReactquery, SiTypescript } from "react-icons/si";
import { HiBellAlert } from "react-icons/hi2";
import { SiReactrouter } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { LiaMousePointerSolid } from "react-icons/lia";
import { CiDark } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";

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
    url: "https://www.linkedin.com/in/mohamed-fawzzi98/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    url: "https://github.com/Mohammed-Fawzzi",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    url: "https://wa.me/+201021580334",
  },
  {
    id: 4,
    icon: <FaTelegramPlane />,
    url: "https://t.me/MohamedFawzzi",
  },
];

export const states = [
  {
    num: 2,
    text: "Years of coding.",
  },
  {
    num: 40,
    text: "Projects Completing.",
  },
  {
    num: 10,
    text: "Technologies Mastered.",
  },
  {
    num: 20,
    text: "Frameworks and Libraries Used.",
  },
];

export const technicalSkills = [
  {
    id: 1,
    title: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    title: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <FaJs />,
  },
  {
    id: 4,
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    title: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 6,
    title: "Bootstrap",
    icon: <FaBootstrap />,
  },
  {
    id: 7,
    title: "React.js",
    icon: <FaReact />,
  },
  {
    id: 8,
    title: "Next.js",
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
    description:
      "I build custom web applications for businesses and individuals using modern frameworks like React and Next.js, tailored to real-world needs.",
  },
  {
    id: 2,
    title: "API Integration",
    icon: "/services/s2.webp",
    description:
      "I integrate external APIs and back-end services to create dynamic and data-driven applications that work seamlessly.",
  },
  {
    id: 3,
    title: "Responsive Designs",
    icon: "/services/s3.webp",
    description:
      "I ensure that all websites are fully responsive and mobile-friendly, providing an optimal experience across all devices.",
  },
  {
    id: 4,
    title: "User Interfaces",
    icon: "/services/s4.webp",
    description:
      "I design and develop engaging front-end interfaces that are intuitive, responsive, SEO-friendly, and aligned with your brand identity.",
  },
  {
    id: 5,
    icon: "/services/s5.webp",
    title: "Speed Optimization",
    description:
      "I optimize performance, reduce load times, and apply best practices to make your site faster and more efficient.",
  },
  {
    id: 6,
    icon: "/services/s6.webp",
    title: "Website Management",
    description:
      "I offer ongoing support, content updates, and flexible website management solutions to keep your site running smoothly.",
  },
];

export const featuredProjectsData = [
  {
    id: 1,
    image: "/fp1.webp",
    title: "Clickat Ads – Marketing & Advertising Platform",
    description:
      "Developed a multi-language marketing platform with dark and light modes. Integrated PayPal and direct link payment methods for advertising campaign requests. Built service modules for website creation requests and social media account management.",
    languages: [
      <FaReact />,
      <RiTailwindCssFill />,
      <SiReactrouter />,
      <SiReactquery />,
      <MdGTranslate />,
    ],
    demo: "https://clickatads.com/",
  },
  {
    id: 2,
    image: "/fp2.webp",
    title: "Dababat – Motorcycle Marketplace Platform",
    description:
      "Developed a motorcycle marketplace platform supporting user authentication, ad and service management, and real-time chat between users. Implemented Google login, role-based access control, and secure user management. Built an Admin Dashboard for managing users, ads, and analytics using Chart.js.",
    languages: [
      <FaReact />,
      <RiTailwindCssFill />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://dababat.com/",
  },
  {
    id: 3,
    image: "/fp3.webp",
    title: "Waqt Al Sayana – Car Maintenance Platform",
    description:
      "Developed a car maintenance reminder platform tracking upcoming service needs (oil changes, filters, battery, tires) and supporting payments via Moyasar. Implemented user profiles, service history tracking, automated scheduling of reminders, chatbot integration, dark/light mode toggle, and a secure Admin Dashboard.",
    languages: [
      <FaReact />,
      <RiTailwindCssFill />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://waqtalsayana.com/",
  },
  {
    id: 4,
    image: "/fp4.webp",
    title: "Italia Market – Authentic Italian Food & Coffee Store",
    description:
      "Developed a multilingual e-commerce platform for authentic Italian products including pasta, coffee, olive oil, and more. Implemented user registration/login, guest browsing, product purchasing, cart management, and dynamic translation using i18next. Designed with a modern responsive UI supporting dark/light mode and optimized for smooth shopping experiences.",
    languages: [
      <FaReact />,
      <RiTailwindCssFill />,
      <SiReactrouter />,
      <SiReactquery />,
      <MdGTranslate />,
    ],
    demo: "https://italiamarkt.com/",
  },
  {
    id: 5,
    image: "/fp5.webp",
    title: "E4Traders – Trading Education Platform",
    description:
      "A secure education platform delivering encrypted video-based courses with watermark protection, Google login, and progressive content unlocking. Features Stripe payment, admin dashboard, and smooth user navigation.",
    languages: [
      <FaReact />,
      <RiTailwindCssFill />,
      <FaCcStripe />,
      <FaProjectDiagram />,
      <FaMobileAlt />,
    ],
    demo: "https://e4traders.com/invite?ref=X5W94HDLE",
  },
  {
    id: 6,
    image: "/fp6.webp",
    title: "Mahmoud Elazony – E-Learning Platform",
    description:
      "A comprehensive e-learning platform for online exams and student assessments. Includes an admin dashboard, secure authentication, unique student access codes, and full backend integration. Built to support scalable assessments and admin control.",
    languages: [
      <FaReact />,
      <FaBootstrap />,
      <FaProjectDiagram />,
      <TbBrandFramerMotion />,
      <FaMobileAlt />,
    ],
    demo: "https://mahmoud-ebrahim-elazony.tech/",
  },
];

export const reviewsData = [
  {
    name: "Noura S.",
    icon: <FaUserCircle size={48} />,
    text: "سعدت كثيرًا بالتعامل معك، كنت سريعًا، محترفًا، ومتعاونًا في كل مرحلة من المشروع. جودة العمل كانت ممتازة، وإن شاء الله سيكون بينا تعاون مستقبلي في مشاريع أخرى.",
  },
  {
    name: "Ahmed E.",
    icon: <FaUserCircle size={48} />,
    text: "أحب أشكرك جزيل الشكر على الخدمة الرائعة اللي قدمتها لي. بصراحة كنت محترف في التعامل، وسريع في التنفيذ، وجودة الشغل كانت فوق التوقعات. أنصح أي عميل بالتعامل معك، وإن شاء الله مش هيكون آخر تعامل بينا.",
  },
  {
    name: "Anas Z.",
    icon: <FaUserCircle size={48} />,
    text: "أفضل مطور ويب يمكن التعامل معه على الإطلاق! خبرة استثنائية في التصميم، تواصل ممتاز وسرعة في التنفيذ، والنتيجة النهائية كانت موقع إلكتروني بأداء مثالي يفوق كل التوقعات.",
  },
  {
    name: "European Intl. F.",
    icon: <FaUserCircle size={48} />,
    text: "إنسان مجتهد وشاطر بعلمه وأنصح به بشدة. ارجوا التفاوض معه قبل الشراء لأنه سيفيدك جدًا. وفقه الله لكل خير.",
  },
  {
    name: "Mohammed E.",
    icon: <FaUserCircle size={48} />,
    text: "بشمهندس محمد أبدعت في تنفيذ المشروع بجودة عالية وإتقان كبير، وفوق ذلك كنت سريع جدًا في التسليم. تعامل احترافي وتواصل ممتاز. أنصح بالتعامل معه بشدة، ولن يكون آخر تعاون بيننا بإذن الله.",
  },
];

export const reactNextData = [
  {
    id: 1,
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
    id: 2,
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
    id: 5,
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
  {
    id: 8,
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
    title: "Tawkeele – Multi-language Umrah Platform",
    description: `A multi-language website that enables users to perform Umrah or Hajj on behalf of their loved ones through authorized individuals.`,
    languages: [
      <FaHtml5 />,
      <FaCss3Alt />,
      <FaBootstrap />,
      <FaJsSquare />,
      <FaMobileAlt />,
    ],
    demo: "https://tawkeele.com/",
    repo: "https://github.com/Mohammed-Fawzzi/Tawkeele",
  },
  {
    id: 2,
    image: "/projects/ui/ui2.webp",
    title: "Hostit",
    description:
      "Hostit:  Our platform offers user-friendly interfaces and robust hosting capabilities to ensure your websites run smoothly and efficiently.",
    languages: [<FaHtml5 />, <FaCss3 />, <FaFontAwesome />, <FaMobileAlt />],
    demo: "https://mohammed-fawzzi.github.io/Hostit/",
    repo: "https://github.com/Mohammed-Fawzzi/Hostit",
  },
  {
    id: 3,
    image: "/projects/ui/ui3.webp",
    title: "Mealify",
    description:
      "Mealify :  is a restaurant website , featuring user-friendly interfaces, a dark mode, and robust navigation capabilities to ensure your browsing experience is smooth and enjoyable.",
    languages: [<FaHtml5 />, <FaCss3 />, <FaFontAwesome />, <FaMobileAlt />],
    demo: "https://mohammed-fawzzi.github.io/Mealify/",
    repo: "https://github.com/Mohammed-Fawzzi/Mealify",
  },
  {
    id: 4,
    image: "/projects/ui/ui4.webp",
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
];

export const contactData = [
  {
    id: 1,
    icon: <FaUser className="text-icons text-accent" />,
    text: "Mohamed Fawzzi",
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
    link: "https://wa.me/201021580334",
  },
  {
    id: 4,
    icon: <FaEnvelope className="text-icons text-accent" />,
    text: "moahmedfawzzimohamed@gmail.com",
    link: "mailto:moahmedfawzzimohamed@gmail.com",
  },
];
