import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";

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
