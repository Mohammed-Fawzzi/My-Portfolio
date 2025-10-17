import { ToastContainer } from "react-toastify";
import Footer from "./(Components)/Footer/Footer";
import Navbar from "./(Components)/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Hello, I am Mohamed Fawzzi",
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
