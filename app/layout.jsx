import { ToastContainer } from "react-toastify";
import Footer from "./(Components)/Footer/Footer";
import Navbar from "./(Components)/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mohamedfawzzi.site/"),
  title: {
    default: "Mohamed Fawzzi | Front-End Developer",
    template: "%s | Mohamed Fawzzi",
  },
  description:
    "Mohamed Fawzzi is a Front-End Developer specialized in React, Next.js, and modern web technologies.",
  verification: {
    google: "_Tk8vv4akHbggsv9NyKCrovO1bogCAtsUUqTA1mYFdk",
  },
  keywords: [
    "Mohamed Fawzzi",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "TypeScript",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mohamed Fawzzi" }],
  creator: "Mohamed Fawzzi",
  openGraph: {
    title: "Mohamed Fawzzi | Front-End Developer",
    description:
      "Portfolio of Mohamed Fawzzi - React & Next.js Developer building modern web applications.",
    url: "/",
    siteName: "Mohamed Fawzzi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Fawzzi | Front-End Developer",
    description: "Front-End Developer specialized in React and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Footer />
      </body>
    </html>
  );
}
