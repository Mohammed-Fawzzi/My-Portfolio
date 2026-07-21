"use client";

import { useMemo, useState, useTransition, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { submitContact } from "@/app/actions/contact";
import {
  createContactSchema,
  subjectOptions,
} from "@/lib/schemas/contact";
import { contactData } from "@/constants";
import ContactSuccessModal from "./ContactSuccessModal";
import ContactPhoneInput from "./ContactPhoneInput";

const WHATSAPP_LINK =
  contactData.find((item) => item.link?.includes("wa.me"))?.link ||
  "https://wa.me/966541005479";

function FormField({
  id,
  label,
  required = false,
  optional = false,
  optionalText,
  error,
  className = "",
  children,
}) {
  return (
    <div className={`w-full space-y-2 ${className}`}>
      <label
        htmlFor={id}
        className="flex items-center gap-1 text-sm font-bold text-accent"
      >
        <span>{label}</span>
        {required && (
          <span className="text-red-400 text-lg" aria-hidden="true">
            *
          </span>
        )}
        {optional && (
          <span className="text-xs font-normal text-neutral-400">
            ({optionalText})
          </span>
        )}
      </label>

      {children}

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [isPending, startTransition] = useTransition();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const closeSuccessModal = useCallback(() => {
    setShowSuccessModal(false);
  }, []);

  const showSubmitErrorToast = useCallback(() => {
    toast.error(
      <div className="space-y-3 text-sm leading-relaxed pe-2">
        <p>{t("error")}</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="site-toast-whatsapp"
        >
          <FaWhatsapp className="text-base" aria-hidden="true" />
          <span>{t("errorWhatsapp")}</span>
        </a>
      </div>,
      { autoClose: 8000 }
    );
  }, [t]);

  const schema = useMemo(
    () => createContactSchema((key) => t(key)),
    [t]
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    startTransition(async () => {
      try {
        const result = await submitContact(
          {
            ...data,
            subject: data.subject || undefined,
          },
          locale
        );

        if (result.success) {
          reset();
          setShowSuccessModal(true);
          return;
        }

        showSubmitErrorToast();
      } catch {
        showSubmitErrorToast();
      }
    });
  };

  return (
    <>
      <ContactSuccessModal
        isOpen={showSuccessModal}
        onClose={closeSuccessModal}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField
            id="name"
            label={t("name")}
            required
            error={errors.name?.message}
          >
            <input
              id="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t("namePlaceholder")}
              className="contact-field"
              {...register("name")}
            />
          </FormField>

          <FormField
            id="email"
            label={t("email")}
            required
            error={errors.email?.message}
          >
            <input
              id="email"
              type="email"
              required
              dir="ltr"
              autoComplete="email"
              placeholder={t("emailPlaceholder")}
              className={`contact-field ${isRtl ? "text-end" : "text-start"}`}
              {...register("email")}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormField
            id="phone"
            label={t("phone")}
            optional
            optionalText={t("optional")}
            error={errors.phone?.message}
          >
            <ContactPhoneInput control={control} locale={locale} id="phone" />
          </FormField>

          <FormField
            id="subject"
            label={t("subject")}
            optional
            optionalText={t("optional")}
            error={errors.subject?.message}
          >
            <select
              id="subject"
              className="contact-field contact-field-select cursor-pointer"
              {...register("subject")}
            >
              <option value="">{t("subjectPlaceholder")}</option>
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {t(`subjects.${option}`)}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField
          id="message"
          label={t("message")}
          required
          error={errors.message?.message}
        >
          <textarea
            id="message"
            required
            rows={5}
            placeholder={t("messagePlaceholder")}
            className="contact-field resize-none"
            {...register("message")}
          />
        </FormField>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent py-2 px-4 text-sm font-bold text-primary transition-colors duration-300 hover:bg-accent-HOVER disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>{isPending ? t("sending") : t("submit")}</span>
          <FiSend className="text-icons" />
        </button>
      </form>
    </>
  );
}
