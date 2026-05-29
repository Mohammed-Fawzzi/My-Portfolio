"use client";

import { ToastContainer } from "react-toastify";
import Footer from "@/app/(Components)/Footer/Footer";
import Navbar from "@/app/(Components)/Navbar/Navbar";
import ThemeProvider, { useTheme } from "../ThemeProvider/ThemeProvider";

function ThemedToast() {
  const { theme } = useTheme();

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
}

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <ThemedToast />
      <Footer />
    </ThemeProvider>
  );
}
