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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
