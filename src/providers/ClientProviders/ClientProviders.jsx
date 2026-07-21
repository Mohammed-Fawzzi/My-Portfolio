"use client";

import { ToastContainer } from "react-toastify";
import { useLocale } from "next-intl";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ThemeProvider, { useTheme } from "../ThemeProvider/ThemeProvider";

function ThemedToast() {
  const { theme, mounted } = useTheme();
  const locale = useLocale();
  const isRtl = locale === "ar";

  if (!mounted) return null;

  return (
    <ToastContainer
      key={locale}
      position={isRtl ? "top-left" : "top-right"}
      rtl={isRtl}
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      toastClassName="site-toast"
      progressClassName="site-toast-progress"
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
