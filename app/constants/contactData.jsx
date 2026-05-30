import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";

export const contactMeta = [
  {
    id: 1,
    icon: <FaUser className="text-icons text-accent" />,
    key: "name",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt className="text-icons text-accent" />,
    key: "location",
  },
  {
    id: 3,
    icon: <FaPhoneAlt className="text-icons text-accent" />,
    text: "+966541005479",
    link: "https://wa.me/966541005479",
    forceLtr: true,
  },
  {
    id: 4,
    icon: <FaEnvelope className="text-icons text-accent" />,
    text: "moahmedfawzzimohamed@gmail.com",
    link: "mailto:moahmedfawzzimohamed@gmail.com",
    forceLtr: true,
  },
];
