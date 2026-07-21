"use client";

import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
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
      <div className="overflow-x-hidden">
        {children}
        <Footer />
        <div id="scroll-end-marker" aria-hidden="true" className="h-px w-px" />
      </div>
      <ThemedToast />
    </ThemeProvider>
  );
}
