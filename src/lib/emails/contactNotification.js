const COLORS = {
  bg: "#121216",
  card: "#1c1c22",
  surface: "#27272c",
  accent: "#00ff99",
  accentSoft: "rgba(0, 255, 153, 0.12)",
  accentBorder: "rgba(0, 255, 153, 0.45)",
  text: "#ffffff",
  muted: "#a3a3a3",
  link: "#00ff99",
  onAccent: "#1c1c22",
};

const copy = {
  en: {
    title: "New contact message",
    subtitle: "A visitor submitted the contact form on your portfolio.",
    reference: "Reference",
    sentAt: "Sent at",
    subject: "Subject",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    reply: "Reply to",
    footer: "Sent from the contact form on",
    rights: "All rights reserved.",
    noPhone: "Not provided",
    siteName: "Mohamed Fawzzi",
  },
  ar: {
    title: "رسالة تواصل جديدة",
    subtitle: "قام أحد الزوار بإرسال نموذج التواصل من الموقع.",
    reference: "رقم المرجع",
    sentAt: "وقت الإرسال",
    subject: "الموضوع",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الجوال",
    message: "الرسالة",
    reply: "الرد على",
    footer: "تم الإرسال من نموذج التواصل على",
    rights: "جميع الحقوق محفوظة.",
    noPhone: "غير متوفر",
    siteName: "محمد فوزي",
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

export function createReferenceId() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i += 1) {
    code += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `PF-${code}`;
}

export function formatSentAt(locale, date = new Date()) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function toWhatsAppLink(phone) {
  const digits = String(phone).replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}

function fieldRow(label, value, { isRtl, isLink, forceLtr } = {}) {
  const align = isRtl ? "right" : "left";
  const directionStyle = forceLtr
    ? "direction:ltr;unicode-bidi:isolate;text-align:left;"
    : "";
  const safeValue = isLink
    ? `<a href="${value.href}" target="_blank" rel="noopener noreferrer" style="color:${COLORS.link};text-decoration:none;${directionStyle}">${value.label}</a>`
    : forceLtr
      ? `<span style="${directionStyle}">${escapeHtml(value)}</span>`
      : escapeHtml(value);

  return `
    <tr>
      <td style="padding:16px 0;border-bottom:1px solid ${COLORS.surface};text-align:${align};">
        <div style="font-size:13px;font-weight:700;color:${COLORS.accent};margin:0 0 6px;">
          ${escapeHtml(label)}
        </div>
        <div style="font-size:15px;line-height:1.6;color:${COLORS.text};word-break:break-word;${forceLtr && !isLink ? directionStyle : ""}">
          ${safeValue}
        </div>
      </td>
    </tr>
  `;
}

export function buildContactNotificationEmail({
  name,
  email,
  phone,
  subjectLabel,
  message,
  locale = "en",
  referenceId,
  sentAt,
  siteUrl = "https://mohamedfawzzi.site",
}) {
  const isRtl = locale === "ar";
  const t = copy[isRtl ? "ar" : "en"];
  const dir = isRtl ? "rtl" : "ltr";
  const align = isRtl ? "right" : "left";
  const borderSide = isRtl ? "border-right" : "border-left";
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const safeRef = escapeHtml(referenceId);
  const safeSentAt = escapeHtml(sentAt);
  const domain = siteUrl.replace(/^https?:\/\//, "");
  const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subjectLabel}`)}`;
  const replyLabel = `${t.reply} ${name}`;
  const phoneDisplay = phone ? escapeHtml(phone) : escapeHtml(t.noPhone);
  const whatsappLink = phone ? toWhatsAppLink(phone) : null;
  const phoneField = whatsappLink
    ? fieldRow(
        t.phone,
        {
          href: whatsappLink,
          label: phoneDisplay,
        },
        { isRtl, isLink: true, forceLtr: true }
      )
    : fieldRow(t.phone, phone || t.noPhone, { isRtl, forceLtr: Boolean(phone) });

  return `
<!DOCTYPE html>
<html lang="${isRtl ? "ar" : "en"}" dir="${dir}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(t.title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${COLORS.bg};font-family:Cairo,Chakra Petch,Segoe UI,Tahoma,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.bg};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:${COLORS.card};border-radius:16px;overflow:hidden;border:1px solid ${COLORS.surface};">
            <tr>
              <td style="background:linear-gradient(135deg,#1c1c22 0%,#0b3d2e 45%,#00ff99 160%);padding:28px 28px 24px;text-align:${align};">
                <h1 style="margin:0 0 8px;font-size:24px;line-height:1.3;color:${COLORS.text};font-weight:700;">
                  ${escapeHtml(t.title)}
                </h1>
                <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.82);">
                  ${escapeHtml(t.subtitle)}
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.accentSoft};border:1px solid ${COLORS.accentBorder};border-radius:12px;">
                  <tr>
                    <td style="padding:16px 18px;text-align:${align};">
                      <div style="font-size:12px;font-weight:700;color:${COLORS.accent};margin:0 0 4px;">
                        ${escapeHtml(t.reference)}
                      </div>
                      <div style="font-size:16px;font-weight:700;color:${COLORS.text};margin:0 0 14px;letter-spacing:0.04em;">
                        ${safeRef}
                      </div>
                      <div style="font-size:12px;font-weight:700;color:${COLORS.accent};margin:0 0 4px;">
                        ${escapeHtml(t.sentAt)}
                      </div>
                      <div style="font-size:14px;color:${COLORS.muted};">
                        ${safeSentAt}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 28px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRow(t.subject, subjectLabel, { isRtl })}
                  ${fieldRow(t.name, name, { isRtl })}
                  ${fieldRow(
                    t.email,
                    {
                      href: `mailto:${encodeURIComponent(email)}`,
                      label: safeEmail,
                    },
                    { isRtl, isLink: true, forceLtr: true }
                  )}
                  ${phoneField}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 28px 8px;text-align:${align};">
                <div style="font-size:13px;font-weight:700;color:${COLORS.accent};margin:0 0 10px;">
                  ${escapeHtml(t.message)}
                </div>
                <div style="background:${COLORS.surface};border-radius:12px;${borderSide}:4px solid ${COLORS.accent};padding:16px 18px;font-size:15px;line-height:1.7;color:${COLORS.text};word-break:break-word;">
                  ${safeMessage}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px;text-align:center;">
                <a href="${mailto}" style="display:inline-block;background:${COLORS.accent};color:${COLORS.onAccent};text-decoration:none;font-weight:700;font-size:14px;padding:10px 18px;border-radius:8px;">
                  ${escapeHtml(replyLabel)}
                </a>
              </td>
            </tr>

            <tr>
              <td style="background:${COLORS.surface};padding:20px 28px;text-align:center;">
                <p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:${COLORS.muted};">
                  ${escapeHtml(t.footer)}
                  <a href="${escapeHtml(siteUrl)}" style="color:${COLORS.link};text-decoration:none;">${escapeHtml(domain)}</a>
                </p>
                <p style="margin:0;font-size:12px;color:${COLORS.muted};">
                  © ${new Date().getFullYear()} ${escapeHtml(t.siteName)}. ${escapeHtml(t.rights)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

export function sanitizeFromName(name) {
  return (
    String(name)
      .replace(/[\r\n<>"]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 80) || "Portfolio Contact"
  );
}

export function extractEmailAddress(fromValue) {
  const match = String(fromValue).match(/<([^>]+)>/);
  return (match ? match[1] : fromValue).trim();
}
