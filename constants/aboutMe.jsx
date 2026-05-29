import { FaLaptopCode, FaTools, FaUserGraduate } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";

export const aboutMe = [
  {
    title: "Education",
    desc: "Bachelor’s degree in Computer Science with a strong foundation in software development and modern web technologies.",
    icon: <FaUserGraduate />,
    side: "left",
    delay: 0,
  },
  {
    title: "Professional Experience",
    desc: "Front-End Developer at Petra Project Management (Remote), where I developed and maintained scalable front-end applications using React, with exposure to Next.js, while collaborating with project managers and stakeholders.",
    icon: <GrUserExpert />,
    side: "right",
    delay: 0.4,
  },
  {
    title: "Internship",
    desc: "Front-End Developer Intern at Dr Code, focused on building responsive web interfaces using HTML, CSS, JavaScript, and React, and integrating RESTful APIs while working closely with UI/UX designers.",
    icon: <FaTools />,
    side: "left",
    delay: 0.8,
  },
  {
    title: "Freelancing",
    desc: "Freelance Front-End Developer working on projects across education, e-commerce, marketing, and trading platforms, delivering responsive, SEO-friendly web applications with a strong focus on performance, accessibility, and modern UI/UX.",
    icon: <FaLaptopCode />,
    side: "right",
    delay: 0.4,
  },
];
