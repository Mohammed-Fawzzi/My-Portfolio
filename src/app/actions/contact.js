"use server";

import { FieldValue } from "firebase-admin/firestore";
import { contactSchema } from "@/lib/schemas/contact";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { getResendClient } from "@/lib/resend";
import {
  buildContactNotificationEmail,
  createReferenceId,
  extractEmailAddress,
  formatSentAt,
  sanitizeFromName,
} from "@/lib/emails/contactNotification";

const subjectLabels = {
  en: {
    job: "Job Opportunity",
    freelance: "Freelance Project",
    inquiry: "General Inquiry",
    other: "Other",
  },
  ar: {
    job: "فرصة عمل",
    freelance: "مشروع مستقل",
    inquiry: "استفسار",
    other: "أخرى",
  },
};

export async function submitContact(data, locale = "en") {
  try {
    const parsed = contactSchema.safeParse({
      ...data,
      phone: data.phone || "",
      subject: data.subject || undefined,
    });

    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.issues[0]?.message || "Invalid form data.",
      };
    }

    const { name, email, phone, subject, message } = parsed.data;
    const collectionName =
      process.env.FIREBASE_CONTACTS_COLLECTION || "contacts";

    const db = getAdminFirestore();
    await db.collection(collectionName).add({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      locale,
      createdAt: FieldValue.serverTimestamp(),
    });

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    if (!toEmail) {
      return {
        success: false,
        error: "Contact email is not configured.",
      };
    }

    const subjectLabel = subject
      ? subjectLabels[locale]?.[subject] || subjectLabels.en[subject]
      : locale === "ar"
        ? "بدون موضوع"
        : "No subject";

    const referenceId = createReferenceId();
    const sentAt = formatSentAt(locale);
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://mohamedfawzzi.site";
    const fromAddress = extractEmailAddress(fromEmail);
    const displayName = sanitizeFromName(name);

    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: `${displayName} <${fromAddress}>`,
      to: toEmail,
      replyTo: email,
      subject:
        locale === "ar"
          ? `رسالة جديدة من ${name} — ${subjectLabel}`
          : `New message from ${name} — ${subjectLabel}`,
      html: buildContactNotificationEmail({
        name,
        email,
        phone,
        subjectLabel,
        message,
        locale,
        referenceId,
        sentAt,
        siteUrl,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Failed to send email notification.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact submission error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    };
  }
}
