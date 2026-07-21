"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const AUTO_CLOSE_MS = 5000;

export default function ContactSuccessModal({ isOpen, onClose }) {
  const t = useTranslations("contact.form");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(onClose, AUTO_CLOSE_MS);
    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-xl border border-accent bg-[#27272c] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t("closeModal")}
              className="absolute end-4 top-4 text-neutral-400 transition-colors duration-300 hover:text-accent"
            >
              <FiX className="text-2xl" />
            </button>

            <div className="flex flex-col items-center text-center">
              <FiCheckCircle className="mb-4 text-5xl text-accent" />

              <h2
                id="contact-success-title"
                className="mb-3 text-xl font-bold text-foreground"
              >
                {t("successTitle")}
              </h2>

              <p className="mb-6 text-neutral-300">{t("successMessage")}</p>

              <Link
                href="/projects"
                onClick={onClose}
                className="rounded-full border border-accent px-6 py-2.5 font-bold text-accent transition-all duration-300 hover:bg-accent-HOVER hover:text-primary"
              >
                {t("browseProjects")}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
