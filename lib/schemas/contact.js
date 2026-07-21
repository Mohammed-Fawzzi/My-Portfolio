import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js/min";

export const subjectOptions = ["job", "freelance", "inquiry", "other"];

const defaultMessages = {
  "errors.nameMin": "Name is too short.",
  "errors.nameMax": "Name is too long.",
  "errors.emailInvalid": "Invalid email address.",
  "errors.phoneInvalid": "Invalid phone number.",
  "errors.messageMin": "Message is too short.",
  "errors.messageMax": "Message is too long.",
};

export const createContactSchema = (t = (key) => defaultMessages[key] ?? key) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(1, t("errors.nameRequired"))
      .min(2, t("errors.nameMin"))
      .max(50, t("errors.nameMax")),

    email: z
      .string()
      .trim()
      .min(1, t("errors.emailRequired"))
      .email(t("errors.emailInvalid")),

    phone: z
      .string()
      .trim()
      .optional()
      .or(z.literal(""))
      .refine(
        (value) => !value || isValidPhoneNumber(value),
        t("errors.phoneInvalid")
      ),

    subject: z
      .union([z.enum(subjectOptions), z.literal("")])
      .optional()
      .transform((value) => (value === "" ? undefined : value)),

    message: z
      .string()
      .trim()
      .min(1, t("errors.messageRequired"))
      .min(10, t("errors.messageMin"))
      .max(1000, t("errors.messageMax")),
  });

export const contactSchema = createContactSchema();
