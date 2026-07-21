"use server";

import { FieldValue } from "firebase-admin/firestore";
import { contactSchema } from "@/lib/schemas/contact";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { getResendClient } from "@/lib/resend";

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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
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
